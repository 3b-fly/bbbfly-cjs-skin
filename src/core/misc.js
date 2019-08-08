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

/**
 * @namespace
 * @inpackage core
 */
bbbfly.morph.misc = {};

/** @ignore */
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

/** @ignore */
bbbfly.morph.misc._getFrame = function(){
  var frame = Function.isFunction(this.GetFrame.callParent)
    ? this.GetFrame.callParent() : this.Frame;

  if(Object.isObject(frame)){
    switch(this.Shade){
      case bbbfly.Morph.shade.light: frame = frame.Light; break;
      case bbbfly.Morph.shade.dark: frame = frame.Dark; break;
    }
  }
  return Object.isObject(frame) ? frame : {};
};

/** @ignore */
bbbfly.morph.misc._getIcon = function(){
  var icon = Function.isFunction(this.GetIcon.callParent)
    ? this.GetIcon.callParent() : this.Icon;

  if(Object.isObject(icon)){
    switch(this.Shade){
      case bbbfly.Morph.shade.light: icon = icon.Light; break;
      case bbbfly.Morph.shade.dark: icon = icon.Dark; break;
    }
  }
  return Object.isObject(icon) ? icon : {};
};

/**
 * @function
 * @name ApplyFrameShade
 * @memberOf bbbfly.morph.misc
 */
bbbfly.morph.misc.ApplyFrameShade = function(def){
  if(!Object.isObject(def)){return;}

  ng_MergeDef(def,{
    Methods: { GetFrame: bbbfly.morph.misc._getFrame }
  });
};

/**
 * @function
 * @name ApplyIconShade
 * @memberOf bbbfly.morph.misc
 */
bbbfly.morph.misc.ApplyIconShade = function(def){
  if(!Object.isObject(def)){return;}

  ng_MergeDef(def,{
    Methods: { GetIcon: bbbfly.morph.misc._getIcon }
  });
};

/**
 * @function
 * @name ApplyClassShade
 * @memberOf bbbfly.morph.misc
 */
bbbfly.morph.misc.ApplyClassShade = function(def,className){
  if(!Object.isObject(def)){return;}

  ng_MergeDef(def,{
    Data: { ClassName: className },
    Methods: { GetClassName: bbbfly.morph.misc._getClassName }
  });
};
