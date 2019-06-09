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
bbbfly.Morph = {
  _DefaultTheme: null,
  _ThemesCnt: 0,
  _Themes: {},
  SetDefaultTheme: bbbfly.morph.core._setDefaultTheme,
  RegisterTheme: bbbfly.morph.core._registerTheme,
  GetTheme: bbbfly.morph.core._getTheme
};

ngUserControls['bbbfly_morph'] = {
  OnCreateControl: bbbfly.morph._onCreateControl
};

/**
 * @event
 * @name OnCreateControl
 * @memberof bbbfly.Morph.Theme#
 *
 * @param {bbbfly.Morph.Def} def - Control definition
 */