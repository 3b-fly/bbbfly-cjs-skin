/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.2
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.HTMLContentFrame = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    ControlsPanel: {
      Data: {
        OverflowY: bbbfly.Renderer.overflow.scroll
      }
    }
  });

  bbbfly.morph.misc.ApplyControlClassName(def,'HTMLContentFrame');
  return ngCreateControlAsType(def,'bbbfly.Frame',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_html'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.HTMLContentFrame',bbbfly.morph.HTMLContentFrame
    );
  }
};
