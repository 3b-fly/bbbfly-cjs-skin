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
bbbfly.morph.map.drawing.Icon = bbbfly.object.Extend(
  bbbfly.MapDrawingItem.IconStyle,function(options,theme){
    bbbfly.MapDrawingItem.IconStyle.call(this);

    this.MorphOptions = null;
    this.MorphTheme = null;

    if(Object.isObject(options)){this.MorphOptions = options;}
    if(String.isString(theme)){this.MorphTheme = theme;}

    bbbfly.morph.misc.ApplyObjectClassName(this,'Icon');
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