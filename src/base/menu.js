/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage menu
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};
/** @ignore */
bbbfly.morph.menu = {};

/** @ignore */
bbbfly.morph.menu._onGetCheckImg = function(menu,item){
  if(!this.ShowCheckboxes || !item){return null;}
  if(typeof item.Checked === 'undefined'){return null;}

  return Function.isFunction(this.OnGetCheckImg.callParent)
    ? this.OnGetCheckImg.callParent(menu,item) : this.CheckImg;
};

/**
 * @class
 * @type control
 * @extends bbbfly.Menu
 * @implements bbbfly.Morph.Control
 *
 * @inpackage menu
 *
 * @param {bbbfly.Panel.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
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

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_menu'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.PopupMenu',bbbfly.morph.PopupMenu
    );
  }
};
