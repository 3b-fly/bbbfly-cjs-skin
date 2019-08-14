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

/** @ignore */
bbbfly.morph.ngmisc._updateFrame = function(recursive){
  var frame = this.ShadeFrame;

  if(Object.isObject(frame)){
    switch(this.Shade){
      case bbbfly.Morph.shade.light: frame = frame.Light; break;
      case bbbfly.Morph.shade.dark: frame = frame.Dark; break;
    }
  }
  this.Frame = Object.isObject(frame) ? frame : null;
  return this.Update.callParent(recursive);
};

/**
 * @function
 * @name ApplyFrameShade
 * @memberOf bbbfly.morph.ngmisc
 */
bbbfly.morph.ngmisc.ApplyFrameShade = function(def){
  if(!Object.isObject(def)){return;}

  ng_MergeDef(def,{
    Data: { ShadeFrame: null },
    Methods: { Update: bbbfly.morph.ngmisc._updateFrame }
  });
};

/**
 * @function
 * @name ApplyClassShade
 * @memberOf bbbfly.morph.ngmisc
 */
bbbfly.morph.ngmisc.ApplyClassShade = function(def,className){
  if(!Object.isObject(def)){return;}
  bbbfly.morph.misc.ApplyClassShade(def,className);

  ng_MergeDef(def,{
    className: className,
    Methods: { Update: bbbfly.morph.ngmisc._updateClassName }
  });
};
