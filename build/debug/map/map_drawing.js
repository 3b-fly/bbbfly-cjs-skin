/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.2
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.map = bbbfly.morph.map || {};
bbbfly.morph.map.drawing = bbbfly.morph.map.drawing || {};

bbbfly.morph.map.drawing.icon = {};
bbbfly.morph.map.drawing.icon._getClassName = function(){
  var cn = this.GetClassName.callParent();
  var opts = this.MorphOptions;

  if(Object.isObject(opts)){
    if(String.isString(opts.Color)){
      cn += ' '+this.GetClassName.callParent('_'+opts.Color);
    }
    if(String.isString(opts.Size)){
      cn += ' '+this.GetClassName.callParent('_'+opts.Size);
    }
    if(String.isString(opts.Shape)){
      cn += ' '+this.GetClassName.callParent('_'+opts.Shape);
    }
  }

  return cn;
};
bbbfly.morph.map.drawing.Icon = bbbfly.object.Extend(
  bbbfly.MapDrawingItem.IconStyle,function(options,theme){
    bbbfly.MapDrawingItem.IconStyle.call(this);

    this.MorphOptions = null;
    this.MorphTheme = null;

    if(Object.isObject(options)){this.MorphOptions = options;}
    if(String.isString(theme)){this.MorphTheme = theme;}

    bbbfly.morph.misc.ApplyObjectClassName(this,'Icon');

    ng_OverrideMethod(this,'GetClassName',
      bbbfly.morph.map.drawing.icon._getClassName
    );

    bbbfly.Morph.OnCreateObject(this);
  }
);
bbbfly.morph.map.drawing.Geometry = bbbfly.object.Extend(
  bbbfly.MapDrawingItem.GeometryStyle,function(options,theme){
    bbbfly.MapDrawingItem.GeometryStyle.call(this);

    this.MorphOptions = null;
    this.MorphTheme = null;

    if(Object.isObject(options)){this.MorphOptions = options;}
    if(String.isString(theme)){this.MorphTheme = theme;}

    bbbfly.morph.misc.ApplyObjectClassName(this,'Geometry');
    bbbfly.Morph.OnCreateObject(this);
  }
);
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_map_style'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterObjectType(
      'bbbfly.morph.map.drawing.Icon',bbbfly.morph.map.drawing.Icon
    );
    bbbfly.Morph.RegisterObjectType(
      'bbbfly.morph.map.drawing.Geometry',bbbfly.morph.map.drawing.Geometry
    );
  }
};