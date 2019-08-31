/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.PanelButton = function(def,ref,parent){
  bbbfly.morph.misc.ApplyIconShade(def);
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassShade(def,'PanelButton');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
bbbfly.morph.PanelIconButton = function(def,ref,parent){
  bbbfly.morph.misc.ApplyIconShade(def);
  bbbfly.morph.misc.ApplyFrameShade(def);

  ng_MergeDef(def,{
    ControlsPanel: null,
    Methods: {
      GetText: function(){return '';}
    }
  });

  bbbfly.morph.misc.ApplyClassShade(def,'IconButtonBanel');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
bbbfly.morph.ContentButton = function(def,ref,parent){
  bbbfly.morph.misc.ApplyIconShade(def);
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassShade(def,'ContentButton');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
bbbfly.morph.LargeContentButton = function(def,ref,parent){
  bbbfly.morph.misc.ApplyIconShade(def);
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassShade(def,'LargeContentButton');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
bbbfly.morph.ContentFlatButton = function(def,ref,parent){
  bbbfly.morph.misc.ApplyIconShade(def);
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassShade(def,'ContentFlatButton');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
bbbfly.morph.ContentIconButton = function(def,ref,parent){
  bbbfly.morph.misc.ApplyIconShade(def);
  bbbfly.morph.misc.ApplyFrameShade(def);

  ng_MergeDef(def,{
    ControlsPanel: null,
    Methods: {
      GetText: function(){return '';}
    }
  });

  bbbfly.morph.misc.ApplyClassShade(def,'ContentIconButton');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
bbbfly.morph.ContentCheckBox = function(def,ref,parent){
  bbbfly.morph.misc.ApplyIconShade(def);
  bbbfly.morph.misc.ApplyFrameShade(def);

  ng_MergeDef(def,{
    Data: {
      SelectType: bbbfly.Btn.selecttype.both,
      AutoSize: bbbfly.Btn.autosize.both
    },
    ControlsPanel: null
  });

  bbbfly.morph.misc.ApplyClassShade(def,'ContentCheckBox');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
bbbfly.morph.ContentRadioButton = function(def,ref,parent){
  bbbfly.morph.misc.ApplyIconShade(def);
  bbbfly.morph.misc.ApplyFrameShade(def);

  ng_MergeDef(def,{
    Data: {
      SelectType: bbbfly.Btn.selecttype.both,
      AutoSize: bbbfly.Btn.autosize.both
    },
    ControlsPanel: null
  });

  bbbfly.morph.misc.ApplyClassShade(def,'ContentRadioButton');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_button'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.PanelButton',bbbfly.morph.PanelButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.PanelIconButton',bbbfly.morph.PanelIconButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentButton',bbbfly.morph.ContentButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.LargeContentButton',bbbfly.morph.LargeContentButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentFlatButton',bbbfly.morph.ContentFlatButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentIconButton',bbbfly.morph.ContentIconButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentCheckBox',bbbfly.morph.ContentCheckBox
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentRadioButton',bbbfly.morph.ContentRadioButton
    );
  }
};
