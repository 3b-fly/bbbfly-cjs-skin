/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.ngmisc = {};
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
bbbfly.morph.ngmisc._updateFrame = function(recursive){
  this.Frame = bbbfly.morph.misc.GetImgShade(this.ShadeFrame,this.Shade);
  return this.Update.callParent(recursive);
};
bbbfly.morph.ngmisc.ApplyFrameShade = function(def){
  if(!Object.isObject(def)){return;}

  ng_MergeDef(def,{
    Data: { ShadeFrame: null },
    Methods: { Update: bbbfly.morph.ngmisc._updateFrame }
  });
};
bbbfly.morph.ngmisc.ApplyClassShade = function(def,className){
  if(!Object.isObject(def)){return;}
  bbbfly.morph.misc.ApplyClassShade(def,className);

  ng_MergeDef(def,{
    className: className,
    Methods: { Update: bbbfly.morph.ngmisc._updateClassName }
  });
};
