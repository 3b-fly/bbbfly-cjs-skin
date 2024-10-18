/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage html
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};

/**
 * @class
 * @type control
 * @extends bbbfly.HTMLContentPanel
 * @implements bbbfly.Morph.Control
 *
 * @inpackage file
 *
 * @param {bbbfly.Panel.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.HTMLContentPanel = function(def,ref,parent){
  bbbfly.morph.misc.ApplyControlClassName(def,'HTMLContentPanel');
  return ngCreateControlAsType(def,'bbbfly.Panel',ref,parent);
};

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_html'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.HTMLContentPanel',bbbfly.morph.HTMLContentPanel
    );
  }
};
