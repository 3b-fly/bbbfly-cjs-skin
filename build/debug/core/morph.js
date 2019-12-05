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

  if(String.isString(def.Theme)){
    themeId = def.Theme;
  }

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
  var url = (ngDEBUG ? 'debug/' : 'release/');

  for(var themeId in this._Themes){
    var theme = this._Themes[themeId];
    if(!theme){continue;}

    if(Function.isFunction(theme.OnInit)){
      theme.OnInit();
    }

    if(String.isString(theme.ImgDir)){url += theme.ImgDir;}
    if(String.isString(theme.Lib)){url = ngLibPath(theme.Lib,url);}

    bbbfly.morph.core._recalcImagePaths(theme.Sources,url);
    bbbfly.morph.core._recalcImageSources(theme.Images,theme.Sources);
  }
};
bbbfly.morph.core._recalcImagePaths = function(sources,url){
  if(!Object.isObject(sources)){return;}
  if(!String.isString(url)){return;}

  for(var i in sources){

    var source = sources[i];
    if(!Object.isObject(source)){return;}

    if(String.isString(source.Path)){
      source.Path = url+source.Path;
    }
  }
};
bbbfly.morph.core._recalcImageSources = function(image,sources){
  if(!Object.isObject(image)){return;}

  for(var i in image){
    var prop = image[i];

    if((i !== 'Src') && Object.isObject(prop)){
      bbbfly.morph.core._recalcImageSources(prop,sources);
    }
  }

  var src = image.Src;
  if(Object.isObject(src)){
    image.Src = '';

    if(String.isString(src.Img) && Object.isObject(sources)){
      var source = sources[src.Img];

      if(Object.isObject(source)){
        if(String.isString(src.Anchor) && Object.isObject(source.Anchors)){
          bbbfly.morph.core._recalcImageAnchor(
            image,source.Anchors[src.Anchor]
          );
        }

        if(String.isString(source.Path)){
          image.Src = source.Path;
        }
      }
    }
  }

  if(String.isString(image.Src) && image.Src){
    ng_PreloadImage(image.Src);
  }
};
bbbfly.morph.core._recalcImageAnchor = function(image,anchor){
  if(!Object.isObject(image)){return;}
  if(!Object.isObject(anchor)){return;}

  var left = anchor.L;
  var top = anchor.T;

  if(!Number.isInteger(left)){left = 0;}
  if(!Number.isInteger(top)){top = 0;}
  if((left === 0) && (top === 0)){return;}

  for(var i in image){
    if(!Number.isInteger(image[i])){continue;}
    if(!bbbfly.Renderer.IsImageLTPosition(i)){continue;}

    switch(i.slice(-1)){
      case 'L': image[i] += left; break;
      case 'T': image[i] += top; break;
    }
  }
};
bbbfly.morph.core._onCreateControl = function(def){
  if(!Object.isObject(def) || !this._CtrlTypes[def.Type]){return;}

  var theme = bbbfly.morph.core.GetDefTheme(def);
  if(theme){
    if(Function.isFunction(theme.OnCreateControl)){
      theme.OnCreateControl(def);
    }

    ng_MergeVarReplace(def,{
      Data: {
        Theme: theme ? theme.ID : null
      }
    },true);
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

ngUserControls['bbbfly_morph'] = {
  OnInit: function(){
    bbbfly.Morph.OnInit();
  },
  OnCreateControl: function(def){
    bbbfly.Morph.OnCreateControl(def);
    return null;
  }
};
