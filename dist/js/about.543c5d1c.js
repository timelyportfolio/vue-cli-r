(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page with a leaflet htmlwidget from R")]),i("html-widget",{attrs:{x:t.leafsettings,name:"leaflet"}},[i("div",{staticClass:"leaflet html-widget html-widget-output shiny-bound-output",staticStyle:{width:"100%",height:"400px"},attrs:{id:"leaf1"}})])],1)},a=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"html-widget"},[t._t("default")],2)},u=[],s=(i("4de4"),i("d3b7"),i("b0c0"),{name:"HtmlWidget",props:["x","name"],methods:{elementData:function(t,e,i){if(2==arguments.length)return t["htmlwidget_data_"+e];if(3==arguments.length)return t["htmlwidget_data_"+e]=i,t;throw new Error("Wrong number of arguments for elementData: "+arguments.length)},updateWidget:function(){var t=this,e=window.HTMLWidgets.widgets,i=e.filter((function(e){return e.name===t.name}))[0],n=this.$el.querySelector(".html-widget"),a=this.elementData(n,"init_result");"undefined"===typeof a&&(a=i.initialize(n),this.elementData(n,"init_result",a),i.renderValue(n,this.x,a)),i.renderValue(n,this.x,a)}},mounted:function(){if("undefined"!==typeof this.x&&null!==this.x){var t=this,e=window.HTMLWidgets.widgets,i=e.filter((function(e){return e.name===t.name}))[0],n=this.$el.querySelector(".html-widget"),a=i.initialize(n);this.elementData(n,"init_result",a),i.renderValue(n,this.x,a)}},updated:function(){this.updateWidget()},watch:{x:{handler:function(){console.log("updating"),this.updateWidget()}}}}),r=s,d=i("2877"),o=Object(d["a"])(r,l,u,!1,null,null,null),h=o.exports,f={name:"About",components:{HtmlWidget:h},data:function(){return this.$root.$data}},m=f,c=Object(d["a"])(m,n,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=about.543c5d1c.js.map