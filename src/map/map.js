/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage map
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};
/** @ignore */
bbbfly.morph.map = bbbfly.morph.map || {};
/** @ignore */
bbbfly.morph.map.sidebar = {};

/**
 * @class
 * @type control
 * @extends bbbfly.MapCrate
 * @implements bbbfly.Morph.Control
 *
 * @inpackage map
 *
 * @param {object} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.MapBox = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    Data: {
      BoundsPadding: { L:80,R:80,T:80,B:80 }
    },
    Controls: {
      Map: { L:0,R:0,T:0,B:0 }
    },
    ModifyControls: {
      ModeBar:{
        Type: 'bbbfly.morph.MapModeBar',
        IgnoreModifyIfMissing: true
      },
      SideBar: {
        Type: 'bbbfly.morph.MapSideBar',
        IgnoreModifyIfMissing: true
      },
      ZoomSlider: {
        Type: 'bbbfly.morph.MapZoomSlider',
        IgnoreModifyIfMissing: true
      },
      Copyrights:{
        Type: 'bbbfly.morph.MapCopyrights',
        IgnoreModifyIfMissing: true
      },
      Layers:{
        Type: 'bbbfly.morph.MapLayers',
        IgnoreModifyIfMissing: true
      }
    }
  });

  bbbfly.morph.misc.ApplyClassName(def,'MapBox');
  return ngCreateControlAsType(def,'bbbfly.MapCrate',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.MapSideBar
 * @implements bbbfly.Morph.Control
 *
 * @inpackage map
 *
 * @param {object} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.MapSideBar = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    CreteFromType: 'bbbfly.morph.ContentWrapper',
    SectionDef: {
      Type: 'bbbfly.Wrapper',
      Data: {
        WrapperOptions: {
          AutoSize: true,
          TrackChanges: true
        }
      }
    },
    ButtonDef: {
      Type: 'bbbfly.morph.ContentIconButton'
    },
    Data: {
      WrapperOptions: {
        AutoSize: true,
        TrackChanges: true
      }
    },
    Controls: {
      MapControls: {
        Controls: {
          Layers: {
            Data: { Icon: 'layers' }
          },
          Copyrights: {
            Data: { Icon: 'copyright' }
          }
        }
      }
    }
  });

  return ngCreateControlAsType(def,'bbbfly.MapSideBar',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.MapZoomSlider
 * @implements bbbfly.Morph.Control
 *
 * @inpackage map
 *
 * @param {object} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.MapZoomSlider = function(def,ref,parent){
  def = def || {};
  var theme = bbbfly.Morph.GetDefTheme(def);

  ng_MergeDef(def,{
    Controls: {
      ZoomIn: {
        Type: 'bbbfly.morph.PanelIconButton',
        style: { zIndex: 2 },
        Data: { Icon: 'plus' }
      },
      ZoomOut: {
        Type: 'bbbfly.morph.PanelIconButton',
        style: { zIndex: 2 },
        Data: { Icon: 'minus' }
      },
      Slider: {
        Type: 'bbbfly.morph.ContentFrame',
        style: { zIndex: 1 },
        Controls: {
          Rail: {
            Type: 'bbbfly.Frame',
            Data: { Theme: theme ? theme.ID : null }
          },
          Handle: {
            Type: 'bbbfly.morph.InverseButton'
          }
        }
      }
    }
  });

  var rail = def.Controls.Slider.Controls.Rail;
  bbbfly.morph.misc.ApplyClassName(rail,'SliderRail');
  return ngCreateControlAsType(def,'bbbfly.MapZoomSlider',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.MapCopyrights
 * @implements bbbfly.Morph.Control
 *
 * @inpackage map
 *
 * @param {object} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.MapCopyrights = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    CreteFromType: 'bbbfly.morph.ContentFrame',
    Controls: {
      TitlePanel: {
        Controls:{
          Refresh: {
            Type: 'bbbfly.morph.ContentIconButton',
            Data: { Icon: 'refresh' }
          },
          Title: {
            Type: 'bbbfly.morph.Title',
            Data: {
              TextAlign: bbbfly.Text.textalign.center
            }
          },
          Close: {
            Type: 'bbbfly.morph.ContentIconButton',
            Data: { Icon: 'close' }
          }
        }
      },
      CopyrightsPanel: {
        Type: 'bbbfly.morph.InputFrame',
        Controls: {
          CopyrightsText: {
            Type: 'bbbfly.morph.Text',
            Data: {
              AutoSize: bbbfly.Text.autosize.vertical
            }
          }
        }
      }
    }
  });

  return ngCreateControlAsType(def,'bbbfly.MapCopyrights',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.MapLayers
 * @implements bbbfly.Morph.Control
 *
 * @inpackage map
 *
 * @param {object} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.MapLayers = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    CreteFromType: 'bbbfly.morph.ContentFrame',
    Controls: {
      TitlePanel: {
        Controls:{
          Refresh: {
            Type: 'bbbfly.morph.ContentIconButton',
            Data: { Icon: 'refresh' }
          },
          Title: {
            Type: 'bbbfly.morph.Title',
            Data: { TextAlign: bbbfly.Text.textalign.center }
          },
          Close: {
            Type: 'bbbfly.morph.ContentIconButton',
            Data: { Icon: 'close' }
          }
        }
      },
      List: {
        Type: 'bbbfly.morph.ContentCheckList'
      }
    }
  });

  return ngCreateControlAsType(def,'bbbfly.MapLayers',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.MapModeBar
 * @implements bbbfly.Morph.Control
 *
 * @inpackage map
 *
 * @param {object} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.MapModeBar = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    CreteFromType: 'bbbfly.morph.ContentWrapper',
    style: { zIndex: 3 },
    Data: {
      WrapperOptions:{
        AutoSize: true,
        TrackChanges: true
      },
      FrameDef: {
        Type: 'ngToolBar',
        Data: { AutoSize: true }
      },
      ButtonDef: {
        Type: 'bbbfly.morph.ContentIconButton'
      }
    }
  });

  return ngCreateControlAsType(def,'bbbfly.MapModeBar',ref,parent);
};

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_map'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.MapBox',bbbfly.morph.MapBox
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.MapSideBar',bbbfly.morph.MapSideBar
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.MapZoomSlider',bbbfly.morph.MapZoomSlider
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.MapCopyrights',bbbfly.morph.MapCopyrights
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.MapLayers',bbbfly.morph.MapLayers
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.MapModeBar',bbbfly.morph.MapModeBar
    );
  }
};
