/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage button
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};

/**
 * @class
 * @type control
 * @extends bbbfly.Btn
 * @implements bbbfly.Morph.Control
 *
 * @inpackage button
 *
 * @param {bbbfly.Panel.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ButtonPanel = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassShade(def,'ButtonPanel');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.Btn
 * @implements bbbfly.Morph.Control
 *
 * @inpackage button
 *
 * @param {bbbfly.Panel.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ContentButton = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassShade(def,'ContentButton');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.Btn
 * @implements bbbfly.Morph.Control
 *
 * @inpackage button
 *
 * @param {bbbfly.Panel.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.LargeContentButton = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassShade(def,'LargeContentButton');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.Btn
 * @implements bbbfly.Morph.Control
 *
 * @inpackage button
 *
 * @param {bbbfly.Panel.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ContentFlatButton = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassShade(def,'ContentFlatButton');
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.Btn
 * @implements bbbfly.Morph.Control
 *
 * @inpackage button
 *
 * @param {bbbfly.Panel.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
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

/**
 * @class
 * @type control
 * @extends bbbfly.Btn
 * @implements bbbfly.Morph.Control
 *
 * @inpackage button
 *
 * @param {bbbfly.Panel.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
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

/** @ignore */
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
      'bbbfly.morph.LargeContentButton',bbbfly.morph.LargeContentButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentFlatButton',bbbfly.morph.ContentFlatButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentCheckBox',bbbfly.morph.ContentCheckBox
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentRadioButton',bbbfly.morph.ContentRadioButton
    );
  }
};
