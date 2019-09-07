﻿/**
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

/** @private */
bbbfly.morph.Button = function(def,ref,parent,className){
  if(!String.isString(className)){className = 'Button';}

  bbbfly.morph.misc.ApplyIconShade(def);
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassShade(def,className);
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
bbbfly.morph.PanelButton = function(def,ref,parent){
  return bbbfly.morph.Button(def,ref,parent,'PanelButton');
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
  return bbbfly.morph.Button(def,ref,parent,'ContentButton');
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
  return bbbfly.morph.Button(def,ref,parent,'LargeContentButton');
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
  return bbbfly.morph.Button(def,ref,parent,'ContentFlatButton');
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
bbbfly.morph.ContentInputButton = function(def,ref,parent){
  return bbbfly.morph.Button(def,ref,parent,'ContentInputButton');
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
bbbfly.morph.PanelIconButton = function(def,ref,parent){
  ng_MergeDef(def,{
    ControlsPanel: null,
    Methods: {
      GetText: function(){return '';}
    }
  });

  return bbbfly.morph.Button(def,ref,parent,'IconButtonBanel');
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
bbbfly.morph.ContentIconButton = function(def,ref,parent){
  ng_MergeDef(def,{
    ControlsPanel: null,
    Methods: {
      GetText: function(){return '';}
    }
  });

  return bbbfly.morph.Button(def,ref,parent,'ContentIconButton');
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
  ng_MergeDef(def,{
    Data: {
      SelectType: bbbfly.Btn.selecttype.both,
      AutoSize: bbbfly.Btn.autosize.both
    },
    ControlsPanel: null
  });

  return bbbfly.morph.Button(def,ref,parent,'ContentCheckBox');
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
  ng_MergeDef(def,{
    Data: {
      SelectType: bbbfly.Btn.selecttype.both,
      AutoSize: bbbfly.Btn.autosize.both
    },
    ControlsPanel: null
  });

  return bbbfly.morph.Button(def,ref,parent,'ContentRadioButton');
};

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_button'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.PanelButton',bbbfly.morph.PanelButton
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
      'bbbfly.morph.PanelIconButton',bbbfly.morph.PanelIconButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentInputButton',bbbfly.morph.ContentInputButton
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
