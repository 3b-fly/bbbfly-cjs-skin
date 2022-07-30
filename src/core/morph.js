/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage core
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};
/** @ignore */
bbbfly.morph.core = {};

/** @ignore */
bbbfly.morph.core._getObjTheme = function(obj){
  if(!Object.isObject(obj)){return null;}

  var themeId = this._DefaultTheme;

  if(String.isString(obj.Theme)){
    themeId = obj.Theme;
  }

  if(String.isString(themeId)){
    var theme = this._Themes[themeId];
    if(theme){return theme;}
  }
  else if(this._ThemesCnt === 1){
    for(var themeId in this._Themes){
      var theme = this._Themes[themeId];
      if(theme && (theme.ID === themeId)){
        return theme;
      }
    }
  }
  return null;
};

/** @ignore */
bbbfly.morph.core._getObjStyle = function(obj){
  if(!Object.isObject(obj)){return null;}

  var styleId = this._DefaultStyle;

  if(String.isString(obj.Style)){
    styleId = obj.Style;
  }

  if(String.isString(styleId)){
    var style = this._Styles[styleId];
    if(style){return style;}
  }
  else if(this._StylesCnt === 1){
    for(var styleId in this._Styles){
      var style = this._Styles[styleId];
      if(style && (style.ID === styleId)){
        return style;
      }
    }
  }
  return null;
};

/** @ignore */
bbbfly.morph.core._setDefaultTheme = function(themeId){
  if(!String.isString(themeId)){return false;}

  this._DefaultTheme = themeId;
  return true;
};

/** @ignore */
bbbfly.morph.core._setDefaultStyle = function(styleId){
  if(!String.isString(styleId)){return false;}

  this._DefaultStyle = styleId;
  return true;
};

/** @ignore */
bbbfly.morph.core._registerTheme = function(theme){
  if(!Object.isObject(theme) || !String.isString(theme.ID)){
    return false;
  }

  this._Themes[theme.ID] = theme;
  this._ThemesCnt += 1;
  return true;
};

/** @ignore */
bbbfly.morph.core._registerStyle = function(style){
  if(!Object.isObject(style) || !String.isString(style.ID)){
    return false;
  }

  this._Styles[style.ID] = style;
  this._StylesCnt += 1;
  return true;
};

/** @ignore */
bbbfly.morph.core._getTheme = function(themeId){
  var theme = this._Themes[themeId];
  return Object.isObject(theme) ? theme : null;
};

/** @ignore */
bbbfly.morph.core._getStyle = function(styleId){
  var style = this._Styles[styleId];
  return Object.isObject(style) ? style : null;
};

/** @ignore */
bbbfly.morph.core._registerControlType = function(type,constr){
  if(!String.isString(type)){return;}
  if(!Function.isFunction(constr)){return;}

  ngRegisterControlType(type,constr);
  this._CtrlTypes[type] = constr;
};

/** @ignore */
bbbfly.morph.core._onInit = function(){
  for(var themeId in this._Themes){
    var theme = this._Themes[themeId];
    bbbfly.morph.core._initDefinition(theme);
  }

  for(var styleId in this._Styles){
    var style = this._Styles[styleId];
    bbbfly.morph.core._initDefinition(style);
  }
};

/** @ignore */
bbbfly.morph.core._initDefinition = function(definition){
  if(!Object.isObject(definition)){return;}

  if(Function.isFunction(definition.OnInit)){
    definition.OnInit();
  }

  var url = (ngDEBUG ? 'debug/' : 'release/');
  if(String.isString(definition.ImgDir)){url += definition.ImgDir;}
  if(String.isString(definition.Lib)){url = ngLibPath(definition.Lib,url);}

  bbbfly.morph.core._recalcImagePaths(definition.Sources,url);
  bbbfly.morph.core._recalcImageSources(definition.Images,definition.Sources);
};

/** @ignore */
bbbfly.morph.core._recalcImagePaths = function(sources,url){
  if(!Object.isObject(sources)){return;}
  if(!String.isString(url)){return;}

  for(var i in sources){

    var source = sources[i];
    if(!Object.isObject(source)){return;}

    if(String.isString(source.Path)){
      source.Path = url+source.Path;
    }
  }
};

/** @ignore */
bbbfly.morph.core._recalcImageSources = function(image,sources){
  if(!Object.isObject(image)){return;}

  for(var i in image){
    var prop = image[i];

    if((i !== 'Src') && Object.isObject(prop)){
      bbbfly.morph.core._recalcImageSources(prop,sources);
    }
  }

  var src = image.Src;
  if(Object.isObject(src)){
    image.Src = '';

    if(String.isString(src.Img) && Object.isObject(sources)){
      var source = sources[src.Img];

      if(Object.isObject(source)){
        if(String.isString(src.Anchor) && Object.isObject(source.Anchors)){
          bbbfly.morph.core._recalcImageAnchor(
            image,source.Anchors[src.Anchor]
          );
        }

        if(String.isString(source.Path)){
          image.Src = source.Path;
        }
      }
    }
  }

  if(String.isString(image.Src) && image.Src){
    ng_PreloadImage(image.Src);
  }
};

/** @ignore */
bbbfly.morph.core._recalcImageAnchor = function(image,anchor){
  if(!Object.isObject(image)){return;}
  if(!Object.isObject(anchor)){return;}

  var left = anchor.L;
  var top = anchor.T;

  if(!Number.isInteger(left)){left = 0;}
  if(!Number.isInteger(top)){top = 0;}
  if((left === 0) && (top === 0)){return;}

  for(var i in image){
    if(!Number.isInteger(image[i])){continue;}
    if(!bbbfly.Renderer.IsImagePosition(i)){continue;}

    switch(i.slice(-1)){
      case 'L': image[i] += left; break;
      case 'T': image[i] += top; break;
    }
  }
};

/** @ignore */
bbbfly.morph.core._onCreateControl = function(def){
  if(!Object.isObject(def) || !this._CtrlTypes[def.Type]){return;}

  var theme = this.GetObjTheme(def);
  var style = this.GetObjStyle(def);

  if(theme && Function.isFunction(theme.OnCreateControl)){
    theme.OnCreateControl(def);
  }

  if(style && Function.isFunction(style.OnCreateControl)){
    style.OnCreateControl(def);
  }

  ng_MergeVarReplace(def,{
    Data: {
      Theme: theme ? theme.ID : null,
      Style: style ? style.ID : null
    }
  },true);
};

/** @ignore */
bbbfly.morph.core._onCreateObj = function(obj){
  if(!Object.isObject(obj)){return;}

  var theme = this.GetObjTheme(obj);
  var style = this.GetObjStyle(obj);

  if(theme && Function.isFunction(theme.OnCreateObj)){
    theme.OnCreateObj(obj);
  }

  if(style && Function.isFunction(style.OnCreateObj)){
    style.OnCreateObj(obj);
  }

  ng_MergeVarReplace(obj,{
    Data: {
      Theme: theme ? theme.ID : null,
      Style: style ? style.ID : null
    }
  },true);
};

/**
 * @class
 * @hideconstructor
 *
 * @description Core themes handler
 *
 * @inpackage core
 */
bbbfly.Morph = {
  /** @private */
  _CtrlTypes: {},
  /** @private */
  _DefaultTheme: null,
  /** @private */
  _ThemesCnt: 0,
  /** @private */
  _Themes: {},

  /** @private */
  _DefaultStyle: null,
  /** @private */
  _StylesCnt: 0,
  /** @private */
  _Styles: {},

  /**
   * @function
   * @name SetDefaultTheme
   * @memberof bbbfly.Morph#
   *
   * @param {string} themeId
   * @return {boolean} If default theme ID was set
   *
   * @see {@link bbbfly.Morph#RegisterTheme|RegisterTheme()}
   * @see {@link bbbfly.Morph#GetTheme|GetTheme()}
   */
  SetDefaultTheme: bbbfly.morph.core._setDefaultTheme,
  /**
   * @function
   * @name SetDefaultStyle
   * @memberof bbbfly.Morph#
   *
   * @param {string} styleId
   * @return {boolean} If default style ID was set
   *
   * @see {@link bbbfly.Morph#RegisterStyle|RegisterStyle()}
   * @see {@link bbbfly.Morph#GetStyle|GetStyle()}
   */
  SetDefaultStyle: bbbfly.morph.core._setDefaultStyle,
  /**
   * @function
   * @name RegisterTheme
   * @memberof bbbfly.Morph#
   *
   * @param {bbbfly.Morph.Definition} theme
   * @return {boolean} If theme was registered
   *
   * @see {@link bbbfly.Morph#SetDefaultTheme|SetDefaultTheme()}
   * @see {@link bbbfly.Morph#GetTheme|GetTheme()}
   */
  RegisterTheme: bbbfly.morph.core._registerTheme,
  /**
   * @function
   * @name RegisterStyle
   * @memberof bbbfly.Morph#
   *
   * @param {bbbfly.Morph.Definition} style
   * @return {boolean} If style was registered
   *
   * @see {@link bbbfly.Morph#SetDefaultStyle|SetDefaultStyle()}
   * @see {@link bbbfly.Morph#GetStyle|GetStyle()}
   */
  RegisterStyle: bbbfly.morph.core._registerStyle,
  /**
   * @function
   * @name GetTheme
   * @memberof bbbfly.Morph#
   *
   * @param {string} themeId - Theme {@link bbbfly.Morph.Definition|ID}
   * @return {bbbfly.Morph.Definition|null}
   *
   * @see {@link bbbfly.Morph#SetDefaultTheme|SetDefaultTheme()}
   * @see {@link bbbfly.Morph#RegisterTheme|RegisterTheme()}
   */
  GetTheme: bbbfly.morph.core._getTheme,
  /**
   * @function
   * @name GetStyle
   * @memberof bbbfly.Morph#
   *
   * @param {string} styleId - Style {@link bbbfly.Morph.Definition|ID}
   * @return {bbbfly.Morph.Definition|null}
   *
   * @see {@link bbbfly.Morph#SetDefaultStyle|SetDefaultStyle()}
   * @see {@link bbbfly.Morph#RegisterStyle|RegisterStyle()}
   */
  GetStyle: bbbfly.morph.core._getStyle,
  /**
   * @function
   * @name GetObjTheme
   * @memberof bbbfly.Morph#
   *
   * @param {bbbfly.Morph.Object} obj
   * @return {bbbfly.Morph.Definition|null}
   *
   * @see {@link bbbfly.Morph#SetDefaultTheme|SetDefaultTheme()}
   * @see {@link bbbfly.Morph#RegisterTheme|RegisterTheme()}
   */
  GetObjTheme: bbbfly.morph.core._getObjTheme,
  /**
   * @function
   * @name GetObjStyle
   * @memberof bbbfly.Morph#
   *
   * @param {bbbfly.Morph.Object} obj
   * @return {bbbfly.Morph.Definition|null}
   *
   * @see {@link bbbfly.Morph#SetDefaultStyle|SetDefaultStyle()}
   * @see {@link bbbfly.Morph#RegisterStyle|RegisterStyle()}
   */
  GetObjStyle: bbbfly.morph.core._getObjStyle,
  /**
   * @function
   * @name RegisterControlType
   * @memberof bbbfly.Morph#
   *
   * @param {string} type - Control type
   * @param {function} constr - Control constructor
   */
  RegisterControlType: bbbfly.morph.core._registerControlType,

  /** @private */
  OnInit: bbbfly.morph.core._onInit,
  /** @private */
  OnCreateControl: bbbfly.morph.core._onCreateControl,
  /** @private */
  OnCreateObj: bbbfly.morph.core._onCreateObj
};

ngUserControls['bbbfly_morph'] = {
  OnInit: function(){
    bbbfly.Morph.OnInit();
  },
  OnCreateControl: function(def){
    bbbfly.Morph.OnCreateControl(def);
    return null;
  }
};

/**
 * @interface
 * @name Object
 * @memberOf bbbfly.Morph
 *
 * @property {string} [Theme=null] - Theme {@link bbbfly.Morph.Definition|ID}
 * @property {string} [Style=null] - Style {@link bbbfly.Morph.Definition|ID}
 */

/**
 * @interface
 * @name Control
 * @memberOf bbbfly.Morph
 * @extends bbbfly.Morph.Object
 */

/**
 * @interface Definition
 * @memberOf bbbfly.Morph
 *
 * @property {string} ID
 * @property {string} Lib - Library ID
 * @property {string} Prefix - will be used in classNames
 * @property {string} [ImgDir=undefined] - Image directory path
 *
 * @property {object} Sources - Image source file definitions
 * @property {object} Images - Image definitions
 */

/**
 * @event
 * @name OnInit
 * @memberof bbbfly.Morph.Definition#
 */

/**
 * @event
 * @name OnCreateControl
 * @memberof bbbfly.Morph.Definition#
 *
 * @param {bbbfly.Morph.Object} def - Control definition
 */

/**
 * @event
 * @name OnCreateObj
 * @memberof bbbfly.Morph.Definition#
 *
 * @param {bbbfly.Morph.Object} obj - Created object
 */