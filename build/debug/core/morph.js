/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.core = {};
bbbfly.morph.core.GetDefTheme = function(def){
  if(!Object.isObject(def)){return null;}

  var themeId = this._DefaultTheme;
  if(String.isString(def.Theme)){themeId = def.Theme;}

  if(String.isString(themeId)){
    var theme = bbbfly.Morph._Themes[themeId];
    if(theme){return theme;}
  }
  else if(bbbfly.Morph._ThemesCnt === 1){
    for(var themeId in bbbfly.Morph._Themes){
      var theme = bbbfly.Morph._Themes[themeId];
      if(theme && (theme.ID === themeId)){
        return theme;
      }
    }
  }
  return null;
};
bbbfly.morph.core.GetDefShade = function(def){
  if(!Object.isObject(def)){return null;}

  var shade = bbbfly.Morph.shade[def.Shade];
  return Number.isInteger(shade) ? shade : bbbfly.Morph.shade.none;
};
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
bbbfly.morph.core._getTheme = function(themeId){
  var theme = this._Themes[themeId];
  return Object.isObject(theme) ? theme : null;
};
bbbfly.morph.core._registerControlType = function(type,constr){
  if(!String.isString(type)){return;}
  if(!Function.isFunction(constr)){return;}

  ngRegisterControlType(type,constr);
  this._CtrlTypes[type] = constr;
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
  if(!Object.isObject(def) || !this._CtrlTypes[def.Type]){return;}

  var theme = bbbfly.morph.core.GetDefTheme(def);
  var shade = bbbfly.morph.core.GetDefShade(def);

  var cn = undefined;
  if(String.isString(def.BaseClassName)){
    switch(shade){
      case bbbfly.Morph.shade.light: cn += 'Light'; break;
      case bbbfly.Morph.shade.dark: cn += 'Dark'; break;
    }
  }

  ng_MergeDef(def,{
    BaseClassName: cn,
    Data: {
      Theme: theme,
      Shade: shade
    }
  });

  if(theme && Function.isFunction(theme.OnCreateControl)){
    theme.OnCreateControl(def);
  }
};
bbbfly.Morph = {
  _CtrlTypes: {},
  _DefaultTheme: null,
  _ThemesCnt: 0,
  _Themes: {},
  SetDefaultTheme: bbbfly.morph.core._setDefaultTheme,
  RegisterTheme: bbbfly.morph.core._registerTheme,
  GetTheme: bbbfly.morph.core._getTheme,
  RegisterControlType: bbbfly.morph.core._registerControlType,
  OnInit: bbbfly.morph.core._onInit,
  OnCreateControl: bbbfly.morph.core._onCreateControl
};
bbbfly.Morph.shade = {
  none: 0,
  light: 1,
  dark: 2
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
 * @interface
 * @name Control
 * @memberOf bbbfly.Morph
 *
 * @property {string|null} [Theme=null]
 * @property {bbbfly.Morph.shade} [Shade=none]
 */