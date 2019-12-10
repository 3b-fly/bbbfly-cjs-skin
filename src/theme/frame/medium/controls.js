/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage theme-frame-medium
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};
/** @ignore */
bbbfly.morph.theme = bbbfly.morph.theme || {};
/** @ignore */
bbbfly.morph.theme.frame = bbbfly.morph.theme.frame || {};
/** @ignore */
bbbfly.morph.theme.frame.medium = bbbfly.morph.theme.frame.medium || {};
/** @ignore */
bbbfly.morph.theme.frame.medium.controls = {};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls._getButtonIcon = function(){
  if(String.isString(this.Icon) && Object.isObject(this._IconRefs)){

    var icon = this._IconRefs[this.Icon];
    return Object.isObject(icon) ? icon : null;
  }

  return this.GetIcon.callParent();
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ApplyBtnIcon = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      _IconRefs: imgs.Icon.Button
    },
    Methods: {
      GetIcon: bbbfly.morph.theme.frame.medium.controls._getButtonIcon
    }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentFrame = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Frame: imgs.Frame.Outer }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.InputFrame = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Frame: imgs.Frame.Inner }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentSeparator = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Frame: imgs.Line.Inner }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.TextHint = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.HintFrame.Frame,
      Anchors: imgs.HintFrame.Anchors
    },
    ControlsPanel: { className: 'ControlsPanel' },
    Controls: { Hint: { className: 'Hint' } }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.PanelButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Panel,
      Indent: {L:-3,T:-3,R:-3,B:-3}
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Std,
      Indent: {L:-3,T:-3,R:-3,B:-3}
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentFlatButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Flat,
      Indent: {L:-3,T:-3,R:-3,B:-3}
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentInputButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Input,
      Indent: {L:-3,T:-3,R:-3,B:-3}
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.LargeContentButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Std,
      Indent: {L:11,T:11,R:11,B:11}
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.PanelIconButton = function(def,imgs){
  ng_MergeDef(def,{
    W:28,H:28,
    Data: {
      Frame: imgs.Button.Panel
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentIconButton = function(def,imgs){
  ng_MergeDef(def,{
    W:28,H:28,
    Data: {
      Frame: imgs.Button.Flat
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentCheckBox = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Icon: imgs.Button.Check }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentRadioButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Icon: imgs.Button.Radio }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentList = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.Frame.Inner,
      CheckImg: imgs.Image.List.Check,

      ListIndent: 0,
      DefaultIndent: 15
    }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentTreeList = function(def,imgs){
  ng_MergeDef(def,{
    Data: { TreeImg: imgs.Image.List.Tree }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.PopupMenu = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.Frame.Outer,
      SubMenuImg: imgs.Image.Menu.SubMenu,
      CheckImg: imgs.Image.Menu.Check
    }
  });
};

/**
 * @function
 * @name SkinControl
 *
 * @param {object} def Control definition
 * @param {object} imgs Images definition
 */
bbbfly.morph.theme.frame.medium.controls.SkinControl = function(def,imgs){
  if(!Object.isObject(def) || !Object.isObject(imgs)){return;}

  switch(def.Type){
    //panel
    case 'bbbfly.morph.ContentFrame':
      this.ContentFrame(def,imgs);
    break;
    case 'bbbfly.morph.InputFrame':
      this.InputFrame(def,imgs);
    break;
    case 'bbbfly.morph.ContentSeparator':
      this.ContentSeparator(def,imgs);
    break;
    //grid
    case 'bbbfly.morph.ContentGrid':
      this.ContentFrame(def,imgs);
    break;
    //wrapper
    case 'bbbfly.morph.ContentWrapper':
      this.ContentFrame(def,imgs);
    break;
    //hint
    case 'bbbfly.morph.TextHint':
      this.TextHint(def,imgs);
    break;
    //button
    case 'bbbfly.morph.PanelButton':
      this.PanelButton(def,imgs);
    break;
    case 'bbbfly.morph.PanelIconButton':
      this.PanelIconButton(def,imgs);
    break;
    case 'bbbfly.morph.ContentButton':
      this.ContentButton(def,imgs);
    break;
    case 'bbbfly.morph.LargeContentButton':
      this.LargeContentButton(def,imgs);
    break;
    case 'bbbfly.morph.ContentFlatButton':
      this.ContentFlatButton(def,imgs);
    break;
    case 'bbbfly.morph.ContentInputButton':
      this.ContentInputButton(def,imgs);
    break;
    case 'bbbfly.morph.ContentIconButton':
      this.ContentIconButton(def,imgs);
    break;
    case 'bbbfly.morph.ContentCheckBox':
      this.ContentCheckBox(def,imgs);
    break;
    case 'bbbfly.morph.ContentRadioButton':
      this.ContentRadioButton(def,imgs);
    break;
    //list
    case 'bbbfly.morph.ContentList':
      this.ContentList(def,imgs);
    break;
    case 'bbbfly.morph.ContentTreeList':
      this.ContentTreeList(def,imgs);
    break;
    //menu
    case 'bbbfly.morph.PopupMenu':
      this.PopupMenu(def,imgs);
    break;
  }
};
