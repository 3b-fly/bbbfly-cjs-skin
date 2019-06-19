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

    var url = String.isString(theme.Lib)
      ? ngLibPath(theme.Lib,path) : path;

    bbbfly.morph.core._recalcImagePaths(theme.Images,url);
    bbbfly.morph.core._recalcImageSources(theme.ImageDefs,theme.Images);
  }
};

/** @ignore */
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

/** @ignore */
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

/** @ignore */
bbbfly.morph.core._onCreateControl = function(def){
  if(!Object.isObject(def) || !this._CtrlTypes[def.Type]){return;}

  var theme = bbbfly.morph.core.GetDefTheme(def);
  if(theme && Function.isFunction(theme.OnCreateControl)){
    theme.OnCreateControl(def);
  }

  var shade = bbbfly.morph.core.GetDefShade(def);

  ng_MergeVarReplace(def,{
    Data: {
      Theme: theme ? theme.ID : null,
      Shade: shade
    }
  },true);
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
 * @property {array} Images - Array of image paths
 * @property {object} ImageDefs - Image definitions
 */

/**
 * @event
 * @name OnCreateControl
 * @memberof bbbfly.Morph.Theme#
 *
 * @param {bbbfly.Morph.Control.Definition} def - Control definition
 */
