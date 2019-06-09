/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.ContentFrame = function(def,ref,parent){
  return ngCreateControlAsType(def,'bbbfly.Frame',ref,parent);
};
bbbfly.morph.MemoFrame = function(def,ref,parent){
  return ngCreateControlAsType(def,'bbbfly.Frame',ref,parent);
};
bbbfly.morph.Separator = function(def,ref,parent){
  return ngCreateControlAsType(def,'bbbfly.Line',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_panel'] = {
  OnInit: function(){
    ngRegisterControlType('bbbfly.morph.ContentFrame',bbbfly.morph.ContentFrame);
    ngRegisterControlType('bbbfly.morph.TextFrame',bbbfly.morph.TextFrame);
    ngRegisterControlType('bbbfly.morph.Separator',bbbfly.morph.Separator);
  }
};
