/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.menu = {};
bbbfly.morph.menu._onGetTreeImg = function(){
  var img = Function.isFunction(this.OnGetTreeImg.callParent)
    ? this.OnGetTreeImg.callParent() : this.TreeImg;

  return bbbfly.morph.misc.GetImgShade(img,this.Shade);
};
bbbfly.morph.menu._onGetCheckImg = function(){
  if(!this.ShowCheckboxes){return null;}

  var img = Function.isFunction(this.OnGetCheckImg.callParent)
    ? this.OnGetCheckImg.callParent() : this.CheckImg;

  return bbbfly.morph.misc.GetImgShade(img,this.Shade);
};
bbbfly.morph.menu._onGetSubMenuImg = function(){
  var img = Function.isFunction(this.OnGetSubMenuImg.callParent)
    ? this.OnGetSubMenuImg.callParent() : this.SubMenuImg;

  return bbbfly.morph.misc.GetImgShade(img,this.Shade);
};
bbbfly.morph.PopupMenu = function(def,ref,parent){
  bbbfly.morph.ngmisc.ApplyFrameShade(def);

  ng_MergeDef(def,{
    Data: {
      SubMenuDef: { Type: 'bbbfly.morph.PopupMenu' }
    },
    OverrideEvents: {
      OnGetTreeImg: bbbfly.morph.menu._onGetTreeImg,
      OnGetCheckImg: bbbfly.morph.menu._onGetCheckImg,
      OnGetSubMenuImg: bbbfly.morph.menu._onGetSubMenuImg
    }
  });

  bbbfly.morph.ngmisc.ApplyClassShade(def,'PopupMenu');
  return ngCreateControlAsType(def,'bbbfly.Menu',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_menu'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.PopupMenu',bbbfly.morph.PopupMenu
    );
  }
};
