define(["esri/map","esri/dijit/Popup","esri/arcgis/utils","dojo/_base/declare","dojo/on","dojo/_base/connect","dojo/touch","dojo/dom","dojo/_base/lang","dojo/dom-style","dojo/query","dojo/NodeList-traverse","esri/geometry/Point","dojo/domReady!"],function(i,t,e,s,n,o,h,a,p,r,_,c,l){"use strict";return{create:function(i,t){var e,s;return i&&t?(e=new this._smartResizer(i,t),s=e.createMap(),s._smartResizer=e,s):void 0},createWebMap:function(i,t,e){var s,n;return t&&e?(s=new this._smartResizer(t,e),n=s.createWebMap(i)):void 0},destroy:function(i){function t(i){if(i._handles)for(var t=i._handles.length;t--;)i._handles[t].remove(),i._handles.splice(t,1)}i&&i._smartResizer&&t(i._smartResizer)},_smartResizer:s(null,{_mapDivId:null,_mapDiv:null,_mapStyle:null,_map:null,_autoRecenterDelay:50,_popupRecenterDelayer:150,_popupPosition:"top",_popupBlocked:!1,_visible:!0,_visibilityTimer:null,_mapDeferred:null,constructor:function(i,t){this._mapDivId=i,this._mapDiv=a.byId(i),this._mapStyle=r.get(this._mapDiv),this._options=p.mixin(t,{}),this._handles=[]},createMap:function(){return this._setMapDiv(!1),p.mixin(this._options,{smartNavigation:!1,autoResize:!1}),this._map=new i(this._mapDivId,this._options),this._bindEvents(),this._mapDiv.__map=this._map,this._map},createWebMap:function(i){var t,s,n;return this._setMapDiv(!1),this._options.hasOwnProperty("mapOptions")||(this._options.mapOptions={}),p.mixin(this._options.mapOptions,{smartNavigation:!1,autoResize:!1}),t=e.createMap(i,this._mapDivId,this._options),this._mapDeferred=t,s=this,n=function(i){this._map=i.map,this._bindEvents(),this._mapDiv.__map=this._map,this._smartResizer=s},this._mapDeferred.then(p.hitch(this,n)),t},_setTouchBehavior:function(){this._options.hasOwnProperty("scrollWheelZoom")&&this._options.scrollWheelZoom?this._map.enableScrollWheelZoom():this._map.disableScrollWheelZoom(),n(_(".esriPopup .titleButton.close"),h.press,p.hitch(this,function(){this._map.infoWindow.hide()}))},_bindEvents:function(){var i,t,e,s,o,h,a;return this._map?(i=function(){this._setTouchBehavior()},this._map.loaded?p.hitch(this,i).call():this._handles.push(n(this._map,"load",p.hitch(this,i))),t=function(){this._map.infoWindow.anchor=this._popupPosition;var i=function(i){var t=i._map.infoWindow.location;t&&!i._popupBlocked&&(i._popupBlocked=!0,window.setTimeout(function(){i._repositionMapForInfoWin(t),i._popupBlocked=!1},i._popupRecenterDelayer))};this.counter=0,this._map.on("click",p.hitch(this,function(){this._map.infoWindow.isShowing&&i(this)})),n(this._map.graphics,"click",p.hitch(this,function(){i(this)})),n(this._map.infoWindow,"show",p.hitch(this,function(){i(this)}))},this._map.loaded?p.hitch(this,t).call():this._handles.push(n(this._map,"load",p.hitch(this,t))),e=function(i,t,e){return function(){function n(){e||i.apply(o,h),s=null}var o=this,h=arguments;s?clearTimeout(s):e&&i.apply(o,h),s=setTimeout(n,t||100)}},o=e(this._setMapDiv,100,!1),this._handles.push(n(window,"resize",p.hitch(this,o))),h=function(){this._map.__resizeCenter=this._map.extent.getCenter(),a=function(){this._map.centerAt(this._map.__resizeCenter)},setTimeout(p.hitch(this,a),this._autoRecenterDelay)},void this._handles.push(n(this._map,"resize",p.hitch(this,h)))):void console.error("BootstrapMap: Invalid map object. Please check map reference.")},_getMapDivVisibility:function(){return this._mapDiv.clientHeight>0||this._mapDiv.clientWidth>0},_checkVisibility:function(){var i=this._getMapDivVisibility();this._visible!==i&&i&&this._setMapDiv(!0)},_controlVisibilityTimer:function(i){i?this._visibilityTimer=setInterval(p.hitch(this,function(){this._checkVisibility()}),200):this._visibilityTimer&&(clearInterval(this._visibilityTimer),this._visibilityTimer=null)},_setMapDiv:function(i){if(this._mapDivId){var t,e,s,n,o,h,a,p,_;t=this._getMapDivVisibility(),this._visible!==t&&(this._visible=t,this._controlVisibilityTimer(!t)),this._visible&&(e=window.innerHeight,s=document.body.clientHeight,n=e-s,o=this._calcMapHeight(),h=this._calcColumnHeight(o),a=o+n,p=0,_=!1,h>o?(p=n>0?h+n:h,_=!0):(p=h>a?h:a,_=!1),r.set(this._mapDivId,{height:p+"px",width:"auto"}),this._map&&i&&this._visible&&(this._map.resize(),this._map.reposition()))}},_calcMapHeight:function(){var i=this._mapStyle,t=parseInt(i.paddingTop,10)+parseInt(i.paddingBottom,10),e=parseInt(i.marginTop,10)+parseInt(i.marginBottom,10),s=parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10),n=t+e+s+this._mapDiv.clientHeight;return n},_calcColumnHeight:function(){var i,t,e,s=0,n=_(this._mapDiv).closest(".row").children("[class*='col']");if(n.length)for(i=0;i<n.length;i++)t=n[i],e=_("#"+this._mapDivId,t).length>0,t.clientHeight>s&&!e&&(s=t.clientHeight);return s},_repositionMapForInfoWin:function(i){var t=new l(this._map.extent.xmax,this._map.extent.ymax,this._map.spatialReference),e=new l(this._map.extent.getCenter()),s=this._map.toScreen(t),n=this._map.toScreen(e),o=this._map.toScreen(i),h=10,a=3,p=this._map.infoWindow.domNode.childNodes[0],r=p.clientWidth,_=p.clientHeight+this._map.infoWindow.marginTop,c=o.x-r/2,m=o.x+r/2,d=0>c-h,u=m>s.x-h,v=this._map.infoWindow.offsetY,f=o.y-_-v,b=0>f-a;d?n.x-=Math.abs(c)+h<h?h:Math.abs(c)+h:u&&(n.x+=m-s.x+h),b&&(n.y+=f-a),(u||d||b)&&(e=this._map.toMap(n),this._map.centerAt(e))}})}});