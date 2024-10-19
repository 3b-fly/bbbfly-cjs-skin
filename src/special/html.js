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
 * @extends bbbfly.Frame
 * @implements bbbfly.Morph.Control
 *
 * @inpackage file
 *
 * @param {bbbfly.Frame.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
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

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_html'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.HTMLContentFrame',bbbfly.morph.HTMLContentFrame
    );
  }
};
