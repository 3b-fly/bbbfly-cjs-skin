/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!isNaN(a)&&Infinity!==a&&-Infinity!==a}},"es6","es3");
$jscomp.polyfill("Number.isInteger",function(a){return a?a:function(a){return Number.isFinite(a)?a===Math.floor(a):!1}},"es6","es3");var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.core={};
bbbfly.morph.core.GetDefTheme=function(a){if(!Object.isObject(a))return null;var b=this._DefaultTheme;String.isString(a.Theme)&&(b=a.Theme);if(String.isString(b)){if(a=bbbfly.Morph._Themes[b])return a}else if(1===bbbfly.Morph._ThemesCnt)for(b in bbbfly.Morph._Themes)if((a=bbbfly.Morph._Themes[b])&&a.ID===b)return a;return null};bbbfly.morph.core.GetDefShade=function(a){return Object.isObject(a)?a.Data&&Number.isInteger(a.Data.Shade)?a.Data.Shade:bbbfly.Morph.shade.none:null};
bbbfly.morph.core._setDefaultTheme=function(a){if(!String.isString(a))return!1;this._DefaultTheme=a;return!0};bbbfly.morph.core._registerTheme=function(a){if(!Object.isObject(a)||!String.isString(a.ID))return!1;this._Themes[a.ID]=a;this._ThemesCnt+=1;return!0};bbbfly.morph.core._getTheme=function(a){a=this._Themes[a];return Object.isObject(a)?a:null};bbbfly.morph.core._registerControlType=function(a,b){String.isString(a)&&Function.isFunction(b)&&(ngRegisterControlType(a,b),this._CtrlTypes[a]=b)};
bbbfly.morph.core._onInit=function(){var a=ngDEBUG?"debug/":"release/",b;for(b in this._Themes){var c=this._Themes[b];if(c){var d=String.isString(c.Lib)?ngLibPath(c.Lib,a):a;bbbfly.morph.core._recalcImagePaths(c.Sources,d);bbbfly.morph.core._recalcImageSources(c.Images,c.Sources)}}};bbbfly.morph.core._recalcImagePaths=function(a,b){if(Object.isObject(a)&&String.isString(b))for(var c in a){var d=a[c];if(!Object.isObject(d))break;String.isString(d.Path)&&(d.Path=b+d.Path)}};
bbbfly.morph.core._recalcImageSources=function(a,b){if(Object.isObject(a)){for(var c in a){var d=a[c];"Src"!==c&&Object.isObject(d)&&bbbfly.morph.core._recalcImageSources(d,b)}c=a.Src;Object.isObject(c)&&(a.Src="",String.isString(c.Img)&&Object.isObject(b)&&(b=b[c.Img],Object.isObject(b)&&(String.isString(c.Anchor)&&Object.isObject(b.Anchors)&&bbbfly.morph.core._recalcImageAnchor(a,b.Anchors[c.Anchor]),String.isString(b.Path)&&(a.Src=b.Path))));String.isString(a.Src)&&a.Src&&ng_PreloadImage(a.Src)}};
bbbfly.morph.core._recalcImageAnchor=function(a,b){if(Object.isObject(a)&&Object.isObject(b)){var c=b.L;b=b.T;Number.isInteger(c)||(c=0);Number.isInteger(b)||(b=0);if(0!==c||0!==b)for(var d in a)if(Number.isInteger(a[d])&&bbbfly.Renderer.IsImageLTPosition(d))switch(d.slice(-1)){case "L":a[d]+=c;break;case "T":a[d]+=b}}};
bbbfly.morph.core._onCreateControl=function(a){if(Object.isObject(a)&&this._CtrlTypes[a.Type]){var b=bbbfly.morph.core.GetDefTheme(a);b&&Function.isFunction(b.OnCreateControl)&&b.OnCreateControl(a);var c=bbbfly.morph.core.GetDefShade(a);ng_MergeVarReplace(a,{Data:{Theme:b?b.ID:null,Shade:c}},!0)}};
bbbfly.Morph={_CtrlTypes:{},_DefaultTheme:null,_ThemesCnt:0,_Themes:{},SetDefaultTheme:bbbfly.morph.core._setDefaultTheme,RegisterTheme:bbbfly.morph.core._registerTheme,GetTheme:bbbfly.morph.core._getTheme,RegisterControlType:bbbfly.morph.core._registerControlType,OnInit:bbbfly.morph.core._onInit,OnCreateControl:bbbfly.morph.core._onCreateControl};bbbfly.Morph.shade={none:0,light:1,dark:2};
ngUserControls.bbbfly_morph={OnInit:function(){bbbfly.Morph.OnInit()},OnCreateControl:function(a){bbbfly.Morph.OnCreateControl(a);return null}};
