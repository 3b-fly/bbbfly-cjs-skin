/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage theme-map-drawing
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};
/** @ignore */
bbbfly.morph.theme = bbbfly.morph.theme || {};
/** @ignore */
bbbfly.morph.theme.map = bbbfly.morph.theme.map || {};
/** @ignore */
bbbfly.morph.theme.map.drawing = bbbfly.morph.theme.map.drawing || {};
/** @ignore */
bbbfly.morph.theme.map.drawing.objects = {};


/** @ignore */
bbbfly.morph.theme.map.drawing.objects.Icon = function(obj,colors,imgs){
  if(
    !Object.isObject(obj)
    || !Object.isObject(colors)
    || !Object.isObject(imgs)
  ){return;}

  var opts = obj.MorphOptions;
  if(!Object.isObject(opts)){return;}

  var images = [];
  var className = 'bbbfly_mapIcon';

  var colorName = opts.Color;

  if(String.isString(colorName)){
    var colorDef = colors[colorName];
    className += ' bbbfly_mapIcon_'+colorName;

    if(Object.isObject(colorDef)){
      var order = colorDef.Order;
      var color = colorDef.Value;

      if(String.isString(color)){
        var size = opts.Size;
        var shape = opts.Shape;

        if(String.isString(size) && String.isString(shape)){
          var icon = imgs[size] ? imgs[size][shape] : null;
          className += ' bbbfly_mapIcon_'+size+shape;

          if(Object.isObject(icon)){
            icon = ng_CopyVar(icon);

            if(Number.isInteger(order)){
              icon.L = ((icon.W + icon.Indent) * order);
            }

            delete icon.Indent;
            images.push(icon);
          }
        }
      }
    }

    var img = opts.FrontImg;
    if(Object.isObject(img)){
      images.push(img);
    }
  }

  obj.SetStyle({
    images: images,
    className: className
  });
};

/** @ignore */
bbbfly.morph.theme.map.drawing.objects.Geometry = function(obj,colors){
  if(
    !Object.isObject(obj)
    || !Object.isObject(colors)
  ){return;}

  var opts = obj.MorphOptions;
  if(!Object.isObject(opts)){return;}

  var colorName = opts.Color;
  var colorDef = colors[colorName];

  if(Object.isObject(colorDef)){
    var color = colorDef.Value;

    if(String.isString(color)){
      obj.SetStyle({
        weight: 2,
        color: color,
        fillColor: color
      });
    }
  }
};

/**
 * @function
 * @name SkinControl
 *
 * @param {object} obj Object
 * @param {object} colors Colors definition
 * @param {object} imgs Images definition
 */
bbbfly.morph.theme.map.drawing.objects.SkinObject = function(obj,colors,imgs){
  if(
    !Object.isObject(obj)
    || !Object.isObject(colors)
    || !Object.isObject(imgs)
  ){return;}

  if(obj instanceof bbbfly.morph.map.drawing.Icon){
      this.Icon(obj,colors,imgs);
  }
  else if(obj instanceof bbbfly.morph.map.drawing.Geometry){
      this.Geometry(obj,colors);
  }
};
