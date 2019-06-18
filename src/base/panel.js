/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage panel
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};

/**
 * @class
 * @type control
 * @extends bbbfly.Panel
 * @implements bbbfly.Morph.Control
 *
 * @inpackage panel
 *
 * @param {bbbfly.Panel.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ContentPanel = function(def,ref,parent){
  bbbfly.morph.misc.ApplyShade(def);
  return ngCreateControlAsType(def,'bbbfly.Panel',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.Frame
 * @implements bbbfly.Morph.Control
 *
 * @inpackage panel
 *
 * @param {bbbfly.Frame.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ContentFrame = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  return ngCreateControlAsType(def,'bbbfly.Frame',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.Frame
 * @implements bbbfly.Morph.Control
 *
 * @inpackage panel
 *
 * @param {bbbfly.Frame.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.InputFrame = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  return ngCreateControlAsType(def,'bbbfly.Frame',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.Line
 * @implements bbbfly.Morph.Control
 *
 * @inpackage panel
 *
 * @param {bbbfly.Frame.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.Separator = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  return ngCreateControlAsType(def,'bbbfly.Line',ref,parent);
};

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_panel'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentFrame',bbbfly.morph.ContentFrame
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.InputFrame',bbbfly.morph.InputFrame
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.Separator',bbbfly.morph.Separator
    );
  }
};
