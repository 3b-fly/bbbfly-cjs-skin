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
bbbfly.morph._onCreateControl = function(def){
  switch(def.Type){
    case 'bbbfly.morph.ContentFrame':
    case 'bbbfly.morph.TextFrame':
    case 'bbbfly.morph.Separator':
      var theme = bbbfly.Morph.GetTheme(def);
      if(theme && Function.isFunction(theme.OnCreateControl)){
        theme.OnCreateControl(def);
      }
    break;
  }
  return null;
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
  GetTheme: bbbfly.morph.core._getTheme
};

ngUserControls['bbbfly_morph'] = {
  OnCreateControl: bbbfly.morph._onCreateControl
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
 * @property {string} [ID=undefined]
 */

/**
 * @event
 * @name OnCreateControl
 * @memberof bbbfly.Morph.Theme#
 *
 * @param {bbbfly.Morph.Def} def - Control definition
 */