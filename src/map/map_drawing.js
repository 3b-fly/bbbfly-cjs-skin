/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage map_drawing
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};
/** @ignore */
bbbfly.morph.map = bbbfly.morph.map || {};
/** @ignore */
bbbfly.morph.map.drawing = bbbfly.morph.map.drawing || {};

/**
 * @class Icon
 * @memberof bbbfly.morph.map.drawing
 * @extends bbbfly.MapDrawingItem.IconStyle
 *
 * @inpackage map_style
 *
 * @param {bbbfly.morph.map.drawing.Icon.options} [options=null]
 * @param {string} [theme=null]  - Theme {@link bbbfly.Morph.Definition|ID}
 *
 * @property {bbbfly.morph.map.drawing.Icon.options} [MorphOptions=null]
 * @property {string} [MorphTheme=null] - Theme {@link bbbfly.Morph.Definition|ID}
 */
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

/**
 * @class Geometry
 * @memberof bbbfly.morph.map.drawing
 * @extends MapDrawingItem.GeometryStyle
 *
 * @inpackage map_style
 *
 * @param {bbbfly.morph.map.drawing.Geometry.options} [options=null]
 * @param {string} [theme=null] - Theme {@link bbbfly.Morph.Definition|ID}
 *
 * @property {bbbfly.morph.map.drawing.Icon.options} [MorphOptions=null]
 * @property {string} [MorphTheme=null] - Theme {@link bbbfly.Morph.Definition|ID}
 */
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

/**
 * @interface options
 * @memberof bbbfly.morph.map.drawing.Icon
 *
 * @property {string} [Size=null]
 * @property {string} [Shape=null]
 * @property {string} [Color=null]
 * @property {bbbfly.Renderer.image} [FrontImg=null]
 */

/**
 * @interface options
 * @memberof bbbfly.morph.map.drawing.Geometry
 *
 * @property {string} [Color=null]
 */

/** @ignore */
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