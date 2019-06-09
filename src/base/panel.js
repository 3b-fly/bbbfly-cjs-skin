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
 * @extends bbbfly.Frame

 * @inpackage panel
 *
 * @param {bbbfly.Panel.definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ContentFrame = function(def,ref,parent){
  return ngCreateControlAsType(def,'bbbfly.Frame',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.Frame

 * @inpackage panel
 *
 * @param {bbbfly.Panel.definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.MemoFrame = function(def,ref,parent){
  return ngCreateControlAsType(def,'bbbfly.Frame',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.Line

 * @inpackage panel
 *
 * @param {bbbfly.Panel.definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.Separator = function(def,ref,parent){
  return ngCreateControlAsType(def,'bbbfly.Line',ref,parent);
};

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_panel'] = {
  OnInit: function(){
    ngRegisterControlType('bbbfly.morph.ContentFrame',bbbfly.morph.ContentFrame);
    ngRegisterControlType('bbbfly.morph.TextFrame',bbbfly.morph.TextFrame);
    ngRegisterControlType('bbbfly.morph.Separator',bbbfly.morph.Separator);
  }
};
