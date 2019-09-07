/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage core
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};
/** @ignore */
bbbfly.morph.core = {};

/** @ignore */
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

/** @ignore */
bbbfly.morph.core.GetDefShade = function(def){
  if(!Object.isObject(def)){return null;}

  return (def.Data && Number.isInteger(def.Data.Shade))
    ? def.Data.Shade : bbbfly.Morph.shade.none;
};

/** @ignore */
bbbfly.morph.core._setDefaultTheme = function(themeId){
  if(!String.isString(themeId)){return false;}

  this._DefaultTheme = themeId;
  return true;
};

/** @ignore */
bbbfly.morph.core._registerTheme = function(theme){
  if(!Object.isObject(theme) || !String.isString(theme.ID)){
    return false;
  }

  this._Themes[theme.ID] = theme;
  this._ThemesCnt += 1;
  return true;
};

/** @ignore */
bbbfly.morph.core._getTheme = function(themeId){
  var theme = this._Themes[themeId];
  return Object.isObject(theme) ? theme : null;
};

/** @ignore */
bbbfly.morph.core._registerControlType = function(type,constr){
  if(!String.isString(type)){return;}
  if(!Function.isFunction(constr)){return;}

  ngRegisterControlType(type,constr);
  this._CtrlTypes[type] = constr;
};

/** @ignore */
bbbfly.morph.core._onInit = function(){
  var path = (ngDEBUG ? 'debug/' : 'release/');

  for(var themeId in this._Themes){
    var theme = this._Themes[themeId];
    if(!theme){continue;}

    if(Function.isFunction(theme.OnInit)){
      theme.OnInit();
    }

    var url = String.isString(theme.Lib)
      ? ngLibPath(theme.Lib,path) : path;

    bbbfly.morph.core._recalcImagePaths(theme.Sources,url);
    bbbfly.morph.core._recalcImageSources(theme.Images,theme.Sources);
  }
};

/** @ignore */
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

/** @ignore */
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

/** @ignore */
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

/** @ignore */
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

/**
 * @class
 * @hideconstructor
 *
 * @description Core themes handler
 *
 * @inpackage core
 */
bbbfly.Morph = {
  /** @private */
  _CtrlTypes: {},
  /** @private */
  _DefaultTheme: null,
  /** @private */
  _ThemesCnt: 0,
  /** @private */
  _Themes: {},

  /**
   * @function
   * @name SetDefaultTheme
   * @memberof bbbfly.Morph#
   *
   * @param {string} themeId
   * @return {boolean} If default theme ID was set
   *
   * @see {@link bbbfly.Morph#RegisterTheme|RegisterTheme()}
   * @see {@link bbbfly.Morph#GetTheme|GetTheme()}
   */
  SetDefaultTheme: bbbfly.morph.core._setDefaultTheme,
  /**
   * @function
   * @name RegisterTheme
   * @memberof bbbfly.Morph#
   *
   * @param {bbbfly.Morph.Theme} theme
   * @return {boolean} If theme was registered
   *
   * @see {@link bbbfly.Morph#SetDefaultTheme|SetDefaultTheme()}
   * @see {@link bbbfly.Morph#GetTheme|GetTheme()}
   */
  RegisterTheme: bbbfly.morph.core._registerTheme,
  /**
   * @function
   * @name GetTheme
   * @memberof bbbfly.Morph#
   *
   * @param {string} themeId - Theme {@link bbbfly.Morph.Theme|ID}
   * @return {bbbfly.Morph.Theme|null}
   *
   * @see {@link bbbfly.Morph#SetDefaultTheme|SetDefaultTheme()}
   * @see {@link bbbfly.Morph#RegisterTheme|RegisterTheme()}
   */
  GetTheme: bbbfly.morph.core._getTheme,
  /**
   * @function
   * @name RegisterControlType
   * @memberof bbbfly.Morph#
   *
   * @description
   *   Modifies passed defintion to make control
   *   implement {@link bbbfly.Morph.Control|Control} interface
   *   and registers control type.
   *
   * @param {string} type - Control type
   * @param {function} constr - Control constructor
   */
  RegisterControlType: bbbfly.morph.core._registerControlType,

  /** @private */
  OnInit: bbbfly.morph.core._onInit,
  /** @private */
  OnCreateControl: bbbfly.morph.core._onCreateControl
};

/**
 * @enum {integer}
 * @description
 *   Possible values for {@link bbbfly.Morph.Control|Shade}
 */
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
 * @property {string} [Theme=null] - Theme {@link bbbfly.Morph.Theme|ID}
 * @property {bbbfly.Morph.shade} [Shade=none]
 * @property {string} [ClassName=undefined]
 */

/**
 * @interface Definition
 * @memberOf bbbfly.Morph.Control
 *
 * @description {@link bbbfly.Morph.Control|Control} definition
 *
 * @property {string} [Theme=undefined] - Theme {@link bbbfly.Morph.Theme|ID}
 */

/**
 * @interface Theme
 * @memberOf bbbfly.Morph
 *
 * @description Theme definition
 *
 * @property {string} ID
 * @property {string} Lib - Library ID
 * @property {string} Prefix - Theme prefix - will be used in classNames
 *
 * @property {object} Sources - Image source file definitions
 * @property {object} Images - Image definitions
 */

/**
 * @event
 * @name OnInit
 * @memberof bbbfly.Morph.Theme#
 */

/**
 * @event
 * @name OnCreateControl
 * @memberof bbbfly.Morph.Theme#
 *
 * @param {bbbfly.Morph.Control.Definition} def - Control definition
 */
