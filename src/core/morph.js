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
  _DefaultTheme: null,
  /** @private */
  _ThemesCnt: 0,
  /** @private */
  _Themes: {},

  /**
   * @function
   * @name RegisterTheme
   * @memberof bbbfly.Morph#
   *
   * @param {string} themeId
   * @return {boolean} If default theme ID was set
   */
  SetDefaultTheme: bbbfly.morph.core._setDefaultTheme,
  /**
   * @function
   * @name RegisterTheme
   * @memberof bbbfly.Morph#
   *
   * @param {bbbfly.Morph.Theme} theme
   * @return {boolean} If theme was registered
   */
  RegisterTheme: bbbfly.morph.core._registerTheme,
  /**
   * @function
   * @name GetTheme
   * @memberof bbbfly.Morph#
   *
   * @param {bbbfly.Morph.Def} def
   * @return {bbbfly.Morph.Theme|null}
   */
  GetTheme: bbbfly.morph.core._getTheme,

  /** @private */
  OnInit: bbbfly.morph.core._onInit,
  /** @private */
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
 * @interface Def
 * @memberOf bbbfly.Morph
 *
 * @description Control definition
 *
 * @property {string} [Theme=undefined]
 */

/**
 * @interface Theme
 * @memberOf bbbfly.Morph
 *
 * @property {string} ID
 * @property {string} Lib - Library ID
 * @property {array} Images - Array of image paths
 * @property {object} ImageDefs - Image definitions
 */

/**
 * @event
 * @name OnCreateControl
 * @memberof bbbfly.Morph.Theme#
 *
 * @param {bbbfly.Morph.Def} def - Control definition
 */