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

  return bbbfly.morph.misc.GetImgShade(frame,this.Shade);
};

/** @ignore */
bbbfly.morph.misc._getIcon = function(){
  var icon = Function.isFunction(this.GetIcon.callParent)
    ? this.GetIcon.callParent() : this.Icon;

  return bbbfly.morph.misc.GetImgShade(icon,this.Shade);
};

/**
 * @function
 * @name GetImgShade
 * @memberOf bbbfly.morph.misc
 *
 * @param {object} obj
 * @param {bbbfly.Morph.shade} shade
 */
bbbfly.morph.misc.GetImgShade = function(img,shade){
  if(!Object.isObject(img)){return null;}

  switch(shade){
    case bbbfly.Morph.shade.light: img = img.Light; break;
    case bbbfly.Morph.shade.dark: img = img.Dark; break;
  }
  return Object.isObject(img) ? img : null;
};

/**
 * @function
 * @name ApplyFrameShade
 * @memberOf bbbfly.morph.misc
 *
 * @param {object} def
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
 *
 * @param {object} def
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
 *
 * @param {object} def
 * @param {string} className
 */
bbbfly.morph.misc.ApplyClassShade = function(def,className){
  if(!Object.isObject(def)){return;}

  ng_MergeDef(def,{
    Data: { ClassName: className },
    Methods: { GetClassName: bbbfly.morph.misc._getClassName }
  });
};
