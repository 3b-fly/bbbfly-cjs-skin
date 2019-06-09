/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.core={};bbbfly.morph.core._setDefaultTheme=function(a){if(!String.isString(a))return!1;this._DefaultTheme=a;return!0};bbbfly.morph.core._registerTheme=function(a){if(!Object.isObject(a)||!String.isString(a.ID))return!1;this._Themes[a.ID]=a;this._ThemesCnt+=1;return!0};
bbbfly.morph.core._getTheme=function(a){if(!Object.isObject(a))return null;var b=this._DefaultTheme;String.isString(a.Theme)&&(b=a.Theme);if(String.isString(b)){if(a=this._Themes[b])return a}else if(1===this._ThemesCnt)for(b in this._Themes)if((a=this._Themes[b])&&a.ID===b)return a;return null};
bbbfly.morph._onCreateControl=function(a){switch(a.Type){case "bbbfly.morph.ContentFrame":case "bbbfly.morph.TextFrame":case "bbbfly.morph.Separator":var b=bbbfly.Morph.GetTheme(a);b&&Function.isFunction(b.OnCreateControl)&&b.OnCreateControl(a)}return null};bbbfly.Morph={_DefaultTheme:null,_ThemesCnt:0,_Themes:{},SetDefaultTheme:bbbfly.morph.core._setDefaultTheme,RegisterTheme:bbbfly.morph.core._registerTheme,GetTheme:bbbfly.morph.core._getTheme};ngUserControls.bbbfly_morph={OnCreateControl:bbbfly.morph._onCreateControl};
