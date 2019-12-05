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
bbbfly.morph.ngmisc = {};

/** @ignore */
bbbfly.morph.ngmisc._updateClassName = function(recursive){
  this.BaseClassName = this.GetClassName();

  var node = this.Elm();
  if(node){
    var cn = node.className;
    var ix = cn.indexOf(' ');

    var ncn = this.BaseClassName;
    if(!String.isString(ncn)){ncn = '';}
    if(ix >= 0){ncn += cn.substr(ix);}
    node.className = ncn;
  }

  return this.Update.callParent(recursive);
};

/**
 * @function
 * @name ApplyClassName
 * @memberOf bbbfly.morph.ngmisc
 */
bbbfly.morph.ngmisc.ApplyClassName = function(def,className){
  if(!Object.isObject(def)){return;}
  bbbfly.morph.misc.ApplyClassName(def,className);

  ng_MergeDef(def,{
    className: className,
    Methods: { Update: bbbfly.morph.ngmisc._updateClassName }
  });
};
