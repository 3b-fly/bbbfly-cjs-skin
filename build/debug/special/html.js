/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.2
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.HTMLContentPanel = function(def,ref,parent){
  bbbfly.morph.misc.ApplyControlClassName(def,'HTMLContentPanel');
  return ngCreateControlAsType(def,'bbbfly.Panel',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_html'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.HTMLContentPanel',bbbfly.morph.HTMLContentPanel
    );
  }
};
