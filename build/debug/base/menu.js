/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.menu = {};
bbbfly.morph.menu._onGetCheckImg = function(menu,item){
  if(!this.ShowCheckboxes || !item){return null;}
  if(typeof item.Checked === 'undefined'){return null;}

  return Function.isFunction(this.OnGetCheckImg.callParent)
    ? this.OnGetCheckImg.callParent(menu,item) : this.CheckImg;
};
bbbfly.morph.PopupMenu = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    Data: {
      SubMenuDef: {
        Type: 'bbbfly.morph.PopupMenu',
        Theme: def.Theme
      }
    },
    OverrideEvents: {
      OnGetCheckImg: bbbfly.morph.menu._onGetCheckImg
    }
  });

  bbbfly.morph.ngmisc.ApplyClassName(def,'PopupMenu');
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
