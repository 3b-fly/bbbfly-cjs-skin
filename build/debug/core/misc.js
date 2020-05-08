/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.1
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.misc = {};
bbbfly.morph.misc._getClassName = function(suffix){
  var cn = this.ClassName;

  if(!String.isString(cn)){return '';}
  if(String.isString(suffix)){cn += suffix;}

  var theme = bbbfly.Morph.GetTheme(this.Theme);
  if(theme && String.isString(theme.Prefix)){cn = theme.Prefix+cn;}

  return cn;
};
bbbfly.morph.misc.ApplyClassName = function(def,className){
  if(!Object.isObject(def)){return;}

  ng_MergeDef(def,{
    Data: { ClassName: className },
    Methods: { GetClassName: bbbfly.morph.misc._getClassName }
  });
};
