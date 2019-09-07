/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.list = {};
bbbfly.morph.checklist = {};
bbbfly.morph.list._onUpdated = function(){
  this.DoSetInvalid(this.Invalid);
};
bbbfly.morph.list._onGetRowClassName = function(list,item){
  var cn = '';
  var bcn = list.BaseClassName;
  if(!String.isString(bcn)){bcn = '';}

  if(item.H || list.ItemHeight){
    cn += 'FixedHRow '+bcn;
  }
  if(item.Static){
    cn += 'StaticRow '+bcn;
  }
  return cn + 'Row';
};
bbbfly.morph.list._doSetInvalid = function(invalid){
  var node = this.Elm();
  if(node){
    var cn = this.BaseClassName;
    node.className = invalid ? (cn+' '+cn+'Invalid') : cn;
  }
};
bbbfly.morph.list._onGetTreeImg = function(){
  var img = Function.isFunction(this.OnGetTreeImg.callParent)
    ? this.OnGetTreeImg.callParent() : this.TreeImg;

  return bbbfly.morph.misc.GetImgShade(img,this.Shade);
};
bbbfly.morph.list._onGetCheckImg = function(list,item){
  if(!this.ShowCheckboxes || !item){return null;}
  if(typeof item.Checked === 'undefined'){return null;}

  var img = Function.isFunction(this.OnGetCheckImg.callParent)
    ? this.OnGetCheckImg.callParent(list,item) : this.CheckImg;

  return bbbfly.morph.misc.GetImgShade(img,this.Shade);
};
bbbfly.morph.checklist._onListClick = function(event){
  var list = event.list;

  if(event.timeStamp !== list._last_click_timestamp){
    list._last_click_timestamp = event.timeStamp;
    list.CheckItem(event.listItem,!event.listItem.Checked);
  }

  return false;
};
bbbfly.morph.ContentList = function(def,ref,parent){
  bbbfly.morph.ngmisc.ApplyFrameShade(def);

  ng_MergeDef(def,{
    Events: {
      OnUpdated: bbbfly.morph.list._onUpdated,
      OnGetRowClassName: bbbfly.morph.list._onGetRowClassName
    },
    OverrideEvents: {
      OnGetTreeImg: bbbfly.morph.list._onGetTreeImg,
      OnGetCheckImg: bbbfly.morph.list._onGetCheckImg
    },
    Methods: {
      DoSetInvalid: bbbfly.morph.list._doSetInvalid
    }
  });

  bbbfly.morph.ngmisc.ApplyClassShade(def,'ContentList');
  return ngCreateControlAsType(def,'bbbfly.List',ref,parent);
};
bbbfly.morph.ContentCheckList = function(def,ref,parent){
  ng_MergeDef(def,{
    Data: { ShowCheckboxes: true },
    Events: { OnClick: bbbfly.morph.checklist._onListClick }
  });

  return ngCreateControlAsType(def,'bbbfly.morph.ContentList',ref,parent);
};
bbbfly.morph.ContentTreeList = function(def,ref,parent){
  return ngCreateControlAsType(def,'bbbfly.morph.ContentList',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_list'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentList',bbbfly.morph.ContentList
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentCheckList',bbbfly.morph.ContentCheckList
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentTreeList',bbbfly.morph.ContentTreeList
    );
  }
};
