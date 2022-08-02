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

  var theme = bbbfly.Morph.GetTheme(this.MorphTheme);
  if(theme && String.isString(theme.Prefix)){cn = theme.Prefix+cn;}

  return cn;
};

/**
 * @function
 * @name ApplyControlClassName
 * @memberOf bbbfly.morph.misc
 *
 * @param {object} def
 * @param {string} className
 */
bbbfly.morph.misc.ApplyControlClassName = function(def,className){
  if(!Object.isObject(def)){return;}

  ng_MergeDef(def,{
    Data: { ClassName: className },
    Methods: { GetClassName: bbbfly.morph.misc._getClassName }
  });
};

/**
 * @function
 * @name ApplyObjectClassName
 * @memberOf bbbfly.morph.misc
 *
 * @param {object} obj
 * @param {string} className
 */
bbbfly.morph.misc.ApplyObjectClassName = function(obj,className){
  if(!Object.isObject(obj)){return;}

  obj.ClassName = className;

  ng_OverrideMethod(obj,'GetClassName',
    bbbfly.morph.misc._getClassName
  );
};