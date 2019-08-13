/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.PopupMenu = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassShade(def,'PopupMenu');
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
