/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.hint = {};
bbbfly.morph.hint._doUpdate = function(node){
  if(node instanceof HTMLElement){
    if(String.isString(this.HintType)){
      node.setAttribute('hint_type',this.HintType);
    }
    else{
      node.removeAttribute('hint_type');
    }
  }
  this.DoUpdate.callParent(node);
};
bbbfly.morph.TextHint = function(def,ref,parent){
  def = def || {};

  bbbfly.morph.ngmisc.ApplyFrameShade(def);
  bbbfly.morph.ngmisc.ApplyAnchorsShade(def);

  ng_MergeDef(def,{
    Data: { HintType: null },
    Methods: { DoUpdate: bbbfly.morph.hint._doUpdate }
  });

  if(def.Data && String.isString(def.Data.HintType)){
    var type = def.Data.HintType;
    var frame = def.Data.ShadeFrame;
    var anchors = def.Data.ShadeAnchors;

    if(frame){
      frame = frame[type];
      if(Object.isObject(frame)){
        def.Data.ShadeFrame = frame;
      }
    }

    if(anchors){
      anchors = anchors[type];
      if(Object.isObject(anchors)){
        def.Data.ShadeAnchors = anchors;
      }
    }
  }

  bbbfly.morph.ngmisc.ApplyClassShade(def,'TextHint');
  return ngCreateControlAsType(def,'bbbfly.TextHint',ref,parent);
};
bbbfly.morph.TextHint.type = {
  info: 'Info',
  submit: 'Submit',
  warn: 'Warn',
  error: 'Error'
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_hint'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.TextHint',bbbfly.morph.TextHint
    );
  }
};
