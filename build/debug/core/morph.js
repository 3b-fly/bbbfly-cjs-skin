/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.core = {};
bbbfly.morph.core._setDefaultTheme = function(themeId){
  if(!String.isString(themeId)){return false;}

  this._DefaultTheme = themeId;
  return true;
};
bbbfly.morph.core._registerTheme = function(theme){
  if(!Object.isObject(theme) || !String.isString(theme.ID)){
    return false;
  }

  this._Themes[theme.ID] = theme;
  this._ThemesCnt += 1;
  return true;
};
bbbfly.morph.core._getTheme = function(def){
  if(!Object.isObject(def)){return null;}

  var themeId = this._DefaultTheme;
  if(String.isString(def.Theme)){themeId = def.Theme;}

  if(String.isString(themeId)){
    var theme = this._Themes[themeId];
    if(theme){return theme;}
  }
  else if(this._ThemesCnt === 1){
    for(var themeId in this._Themes){
      var theme = this._Themes[themeId];
      if(theme && (theme.ID === themeId)){
        return theme;
      }
    }
  }
  return null;
};
bbbfly.morph.core._onInit = function(){
  var path = (ngDEBUG ? 'debug/' : 'release/');

  for(var themeId in this._Themes){
    var theme = this._Themes[themeId];
    if(!theme){continue;}

    var url = String.isString(theme.Lib)
      ? ngLibPath(theme.Lib,path) : path;
      
    bbbfly.morph.core._recalcImagePaths(theme.Images,url);
    bbbfly.morph.core._recalcImageSources(theme.ImageDefs,theme.Images);
  }
};
bbbfly.morph.core._recalcImagePaths = function(images,url){
  if(!Array.isArray(images)){return;}
  if(!String.isString(url)){return;}

  for(var i in images){
    var imgPath = images[i];

    if(String.isString(imgPath)){
      images[i] = url+imgPath;
    }
  }
};

bbbfly.morph.core._recalcImageSources = function(def,images){
  if(!Object.isObject(def)){return;}
  if(!Array.isArray(images)){return;}

  for(var i in def){
    var prop = def[i];

    if((i === 'Src')){
      if(Number.isInteger(prop)){
        var path = images[prop];
        if(!String.isString(path)){path = '';}

        ng_PreloadImage(path);
        def[i] = path;
      }
    }
    else if(Object.isObject(prop)){
      bbbfly.morph.core._recalcImageSources(prop,images);
    }
  }
};
bbbfly.morph.core._onCreateControl = function(def){
  switch(def.Type){
    case 'bbbfly.morph.ContentFrame':
    case 'bbbfly.morph.TextFrame':
    case 'bbbfly.morph.Separator':
      var theme = this.GetTheme(def);
      if(theme && Function.isFunction(theme.OnCreateControl)){
        theme.OnCreateControl(def);
      }
    break;
  }
};
bbbfly.Morph = {
  _DefaultTheme: null,
  _ThemesCnt: 0,
  _Themes: {},
  SetDefaultTheme: bbbfly.morph.core._setDefaultTheme,
  RegisterTheme: bbbfly.morph.core._registerTheme,
  GetTheme: bbbfly.morph.core._getTheme,
  OnInit: bbbfly.morph.core._onInit,
  OnCreateControl: bbbfly.morph.core._onCreateControl
};

ngUserControls['bbbfly_morph'] = {
  OnInit: function(){
    bbbfly.Morph.OnInit();
  },
  OnCreateControl: function(def){
    bbbfly.Morph.OnCreateControl(def);
    return null;
  }
};

/**
 * @event
 * @name OnCreateControl
 * @memberof bbbfly.Morph.Theme#
 *
 * @param {bbbfly.Morph.Def} def - Control definition
 */