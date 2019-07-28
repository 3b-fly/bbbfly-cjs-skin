/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.ButtonPanel = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassName(def,'ButtonPanel');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
bbbfly.morph.ContentButton = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassName(def,'ContentButton');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
bbbfly.morph.ContentLink = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassName(def,'ContentLink');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
bbbfly.morph.LargeContentButton = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassName(def,'LargeContentButton');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
bbbfly.morph.ContentIcon = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassName(def,'ContentIcon');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_button'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ButtonPanel',bbbfly.morph.ButtonPanel
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentButton',bbbfly.morph.ContentButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentLink',bbbfly.morph.ContentLink
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.LargeContentButton',bbbfly.morph.LargeContentButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentIcon',bbbfly.morph.ContentIcon
    );
  }
};
