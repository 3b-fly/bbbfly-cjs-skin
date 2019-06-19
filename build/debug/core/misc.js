/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
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

  switch(this.Shade){
    case bbbfly.Morph.shade.light: cn += 'Light'; break;
    case bbbfly.Morph.shade.dark: cn += 'Dark'; break;
  }
  return cn;
};
bbbfly.morph.misc._getFrame = function(){
  var frame = this.Frame;

  if(Object.isObject(frame)){
    switch(this.Shade){
      case bbbfly.Morph.shade.light: frame = frame.Light; break;
      case bbbfly.Morph.shade.dark: frame = frame.Dark; break;
    }
  }
  return Object.isObject(frame) ? frame : {};
};
bbbfly.morph.misc.ApplyShade = function(def){
  if(!Object.isObject(def)){return;}

  ng_MergeDef(def,{
    Methods: {
      GetClassName: bbbfly.morph.misc._getClassName
    }
  });
};
bbbfly.morph.misc.ApplyFrameShade = function(def){
  if(!Object.isObject(def)){return;}

  ng_MergeDef(def,{
    Methods: { GetFrame: bbbfly.morph.misc._getFrame }
  });

  bbbfly.morph.misc.ApplyShade(def);
};
bbbfly.morph.misc.ApplyClassName = function(def,className){
  if(!Object.isObject(def)){return;}

  ng_MergeDef(def,{
    Data: { ClassName: className }
  });
};
