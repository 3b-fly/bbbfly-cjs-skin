/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.theme = bbbfly.morph.theme || {};
bbbfly.morph.theme.frame = bbbfly.morph.theme.frame || {};
bbbfly.morph.theme.frame.medium = bbbfly.morph.theme.frame.medium || {};
bbbfly.morph.theme.frame.medium.controls = {};
bbbfly.morph.theme.frame.medium.controls._getButtonIcon = function(){
  if(String.isString(this.Icon) && Object.isObject(this._IconRefs)){

    var icon = this._IconRefs[this.Icon];
    return Object.isObject(icon) ? icon : null;
  }

  return this.GetIcon.callParent();
};
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
bbbfly.morph.theme.frame.medium.controls.ContentFrame = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Frame: imgs.Frame.Outer }
  });
};
bbbfly.morph.theme.frame.medium.controls.InputFrame = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Frame: imgs.Frame.Inner }
  });
};
bbbfly.morph.theme.frame.medium.controls.ContentSeparator = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Frame: imgs.Line.Inner }
  });
};
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
bbbfly.morph.theme.frame.medium.controls.ProgressRing = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Image: imgs.Progress.Ring
    }
  });
};
bbbfly.morph.theme.frame.medium.controls.ProgressBar = function(def,imgs){
  ng_MergeDef(def,{
    H:10,
    Data: { Frame: imgs.Frame.Inner },
    Controls: {
      Indicator: { T:0, B:0 }
    }
  });
};
bbbfly.morph.theme.frame.medium.controls.PanelButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Panel,
      Indent: { L:-3, T:-3, R:-3, B:-3 }
    }
  });

  this.ApplyBtnIcon(def,imgs);
};
bbbfly.morph.theme.frame.medium.controls.ContentButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Std,
      Indent: {L:-3,T:-3,R:-3,B:-3}
    }
  });

  this.ApplyBtnIcon(def,imgs);
};
bbbfly.morph.theme.frame.medium.controls.ContentFlatButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Flat,
      Indent: {L:-3,T:-3,R:-3,B:-3}
    }
  });

  this.ApplyBtnIcon(def,imgs);
};
bbbfly.morph.theme.frame.medium.controls.ContentInputButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Input,
      Indent: {L:-3,T:-3,R:-3,B:-3}
    }
  });

  this.ApplyBtnIcon(def,imgs);
};
bbbfly.morph.theme.frame.medium.controls.LargeContentButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Std,
      Indent: {L:11,T:11,R:11,B:11}
    }
  });

  this.ApplyBtnIcon(def,imgs);
};
bbbfly.morph.theme.frame.medium.controls.PanelIconButton = function(def,imgs){
  ng_MergeDef(def,{
    W:28,H:28,
    Data: {
      Frame: imgs.Button.Panel
    }
  });

  this.ApplyBtnIcon(def,imgs);
};
bbbfly.morph.theme.frame.medium.controls.ContentIconButton = function(def,imgs){
  ng_MergeDef(def,{
    W:28,H:28,
    Data: {
      Frame: imgs.Button.Flat
    }
  });

  this.ApplyBtnIcon(def,imgs);
};
bbbfly.morph.theme.frame.medium.controls.ContentCheckBox = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Icon: imgs.Button.Check }
  });
};
bbbfly.morph.theme.frame.medium.controls.ContentRadioButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Icon: imgs.Button.Radio }
  });
};
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
bbbfly.morph.theme.frame.medium.controls.ContentTreeList = function(def,imgs){
  ng_MergeDef(def,{
    Data: { TreeImg: imgs.Image.List.Tree }
  });
};
bbbfly.morph.theme.frame.medium.controls.PopupMenu = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.Frame.Outer,
      SubMenuImg: imgs.Image.Menu.SubMenu,
      CheckImg: imgs.Image.Menu.Check
    }
  });
};
bbbfly.morph.theme.frame.medium.controls.SkinControl = function(def,imgs){
  if(!Object.isObject(def) || !Object.isObject(imgs)){return;}

  switch(def.Type){
    case 'bbbfly.morph.ContentFrame':
      this.ContentFrame(def,imgs);
    break;
    case 'bbbfly.morph.InputFrame':
      this.InputFrame(def,imgs);
    break;
    case 'bbbfly.morph.ContentSeparator':
      this.ContentSeparator(def,imgs);
    break;
    case 'bbbfly.morph.ContentGrid':
      this.ContentFrame(def,imgs);
    break;
    case 'bbbfly.morph.ContentWrapper':
      this.ContentFrame(def,imgs);
    break;
    case 'bbbfly.morph.TextHint':
      this.TextHint(def,imgs);
    break;
    case 'bbbfly.morph.ProgressRing':
      this.ProgressRing(def,imgs);
    break;
    case 'bbbfly.morph.ProgressBar':
      this.ProgressBar(def,imgs);
    break;
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
    case 'bbbfly.morph.ContentList':
      this.ContentList(def,imgs);
    break;
    case 'bbbfly.morph.ContentTreeList':
      this.ContentTreeList(def,imgs);
    break;
    case 'bbbfly.morph.PopupMenu':
      this.PopupMenu(def,imgs);
    break;
  }
};
