/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.2
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.theme=bbbfly.morph.theme||{};bbbfly.morph.theme.map=bbbfly.morph.theme.map||{};bbbfly.morph.theme.map.drawing=bbbfly.morph.theme.map.drawing||{};bbbfly.morph.theme.map.drawing.objects={};
bbbfly.morph.theme.map.drawing.objects._iconImages=function(b,a){var c=[];Object.isObject(b)&&Object.isObject(a)&&(a=a[b.Size],Object.isObject(a)&&(a=a[b.Shape],Object.isObject(a)&&(a=a[b.Color],Object.isObject(a)&&c.push(a))));Object.isObject(b.FrontImg)&&c.push(b.FrontImg);return c};bbbfly.morph.theme.map.drawing.objects.Icon=function(b,a){Object.isObject(b)&&ng_OverrideMethod(b,"GetImages",function(){return bbbfly.morph.theme.map.drawing.objects._iconImages(b.MorphOptions,a)})};
bbbfly.morph.theme.map.drawing.objects.Geometry=function(b,a){if(Object.isObject(b)&&Object.isObject(a)){var c=b.MorphOptions;Object.isObject(c)&&(a=a[c.Color],Object.isObject(a)&&(a=a.Value,String.isString(a)&&b.SetStyle({weight:2,color:a,fillColor:a})))}};
bbbfly.morph.theme.map.drawing.objects.SkinObject=function(b,a,c){Object.isObject(b)&&Object.isObject(a)&&Object.isObject(c)&&(b instanceof bbbfly.morph.map.drawing.Icon?this.Icon(b,c):b instanceof bbbfly.morph.map.drawing.Geometry&&this.Geometry(b,a))};
