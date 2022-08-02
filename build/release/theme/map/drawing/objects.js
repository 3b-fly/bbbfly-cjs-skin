/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.2
 * @license see license in 'LICENSE' file
*/

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!isNaN(a)&&Infinity!==a&&-Infinity!==a}},"es6","es3");
$jscomp.polyfill("Number.isInteger",function(a){return a?a:function(a){return Number.isFinite(a)?a===Math.floor(a):!1}},"es6","es3");var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.theme=bbbfly.morph.theme||{};bbbfly.morph.theme.map=bbbfly.morph.theme.map||{};bbbfly.morph.theme.map.drawing=bbbfly.morph.theme.map.drawing||{};bbbfly.morph.theme.map.drawing.objects={};
bbbfly.morph.theme.map.drawing.objects.Icon=function(a,b,c){if(Object.isObject(a)&&Object.isObject(b)&&Object.isObject(c)){var d=a.MorphOptions;if(Object.isObject(d)){var f=[],e=d.Color;if(String.isString(e)){e=b[e];if(Object.isObject(e)&&(b=e.Order,String.isString(e.Value))){e=d.Size;var g=d.Shape;String.isString(e)&&String.isString(g)&&(c=c[e]?c[e][g]:null,Object.isObject(c)&&(c=ng_CopyVar(c),Number.isInteger(b)&&(c.L=(c.W+c.Indent)*b),delete c.Indent,f.push(c)))}d=d.FrontImg;Object.isObject(d)&&
f.push(d)}a.SetStyle({images:f})}}};bbbfly.morph.theme.map.drawing.objects.Geometry=function(a,b){if(Object.isObject(a)&&Object.isObject(b)){var c=a.MorphOptions;Object.isObject(c)&&(b=b[c.Color],Object.isObject(b)&&(b=b.Value,String.isString(b)&&a.SetStyle({weight:2,color:b,fillColor:b})))}};
bbbfly.morph.theme.map.drawing.objects.SkinObject=function(a,b,c){Object.isObject(a)&&Object.isObject(b)&&Object.isObject(c)&&(a instanceof bbbfly.morph.map.drawing.Icon?this.Icon(a,b,c):a instanceof bbbfly.morph.map.drawing.Geometry&&this.Geometry(a,b))};
