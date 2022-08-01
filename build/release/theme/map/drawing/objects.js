/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.2
 * @license see license in 'LICENSE' file
*/

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,a,c){b!=Array.prototype&&b!=Object.prototype&&(b[a]=c.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(b,a,c,d){if(a){c=$jscomp.global;b=b.split(".");for(d=0;d<b.length-1;d++){var e=b[d];e in c||(c[e]={});c=c[e]}b=b[b.length-1];d=c[b];a=a(d);a!=d&&null!=a&&$jscomp.defineProperty(c,b,{configurable:!0,writable:!0,value:a})}};$jscomp.polyfill("Number.isFinite",function(b){return b?b:function(a){return"number"!==typeof a?!1:!isNaN(a)&&Infinity!==a&&-Infinity!==a}},"es6","es3");
$jscomp.polyfill("Number.isInteger",function(b){return b?b:function(a){return Number.isFinite(a)?a===Math.floor(a):!1}},"es6","es3");var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.theme=bbbfly.morph.theme||{};bbbfly.morph.theme.map=bbbfly.morph.theme.map||{};bbbfly.morph.theme.map.drawing=bbbfly.morph.theme.map.drawing||{};bbbfly.morph.theme.map.drawing.objects={};
bbbfly.morph.theme.map.drawing.objects.Icon=function(b,a,c){if(Object.isObject(b)&&Object.isObject(a)&&Object.isObject(c)){var d=b.MorphOptions;if(Object.isObject(d)){var e=[],g="bbbfly_mapIcon",f=d.Color;if(String.isString(f)){a=a[f];g+=" bbbfly_mapIcon_"+f;if(Object.isObject(a)&&(f=a.Order,String.isString(a.Value))){a=d.Size;var h=d.Shape;String.isString(a)&&String.isString(h)&&(c=c[a]?c[a][h]:null,g+=" bbbfly_mapIcon_"+a+h,Object.isObject(c)&&(c=ng_CopyVar(c),Number.isInteger(f)&&(c.L=(c.W+c.Indent)*
f),delete c.Indent,e.push(c)))}d=d.FrontImg;Object.isObject(d)&&e.push(d)}b.SetStyle({images:e,className:g})}}};bbbfly.morph.theme.map.drawing.objects.Geometry=function(b,a){if(Object.isObject(b)&&Object.isObject(a)){var c=b.MorphOptions;Object.isObject(c)&&(a=a[c.Color],Object.isObject(a)&&(a=a.Value,String.isString(a)&&b.SetStyle({weight:2,color:a,fillColor:a})))}};
bbbfly.morph.theme.map.drawing.objects.SkinObject=function(b,a,c){Object.isObject(b)&&Object.isObject(a)&&Object.isObject(c)&&(b instanceof bbbfly.morph.map.drawing.Icon?this.Icon(b,a,c):b instanceof bbbfly.morph.map.drawing.Geometry&&this.Geometry(b,a))};
