(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["widget"],{"410d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h3",[t._v("This is a leaflet htmlwidget from R in a lazy-loaded Vue route.")]),n("html-widget",{attrs:{x:t.leafsettings,name:"leaflet"}},[n("div",{staticClass:"leaflet html-widget html-widget-output",staticStyle:{width:"100%",height:"400px"},attrs:{id:"leaf1"}})])],1)},l=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"html-widget"},[t._t("default")],2)},u=[],d=(n("4de4"),n("d3b7"),n("b0c0"),{name:"HtmlWidget",props:["x","name"],methods:{elementData:function(t,e,n){if(2==arguments.length)return t["htmlwidget_data_"+e];if(3==arguments.length)return t["htmlwidget_data_"+e]=n,t;throw new Error("Wrong number of arguments for elementData: "+arguments.length)},updateWidget:function(){var t=this,e=window.HTMLWidgets.widgets,n=e.filter((function(e){return e.name===t.name}))[0],i=this.$el.querySelector(".html-widget"),l=this.elementData(i,"init_result");"undefined"===typeof l&&(l=n.initialize(i),this.elementData(i,"init_result",l),n.renderValue(i,this.x,l)),n.renderValue(i,this.x,l)}},mounted:function(){if("undefined"!==typeof this.x&&null!==this.x){var t=this,e=window.HTMLWidgets.widgets,n=e.filter((function(e){return e.name===t.name}))[0],i=this.$el.querySelector(".html-widget"),l=n.initialize(i);this.elementData(i,"init_result",l),n.renderValue(i,this.x,l)}},updated:function(){this.updateWidget()},watch:{x:{handler:function(){console.log("updating"),this.updateWidget()}}}}),o=d,s=n("2877"),r=Object(s["a"])(o,a,u,!1,null,null,null),h=r.exports,f={name:"About",components:{HtmlWidget:h},data:function(){return this.$root.$data},mounted:function(){window.Shiny.bindAll(this.$el)},beforeUnmount:function(){console.log("about to unmount so unbind"),window.Shiny.unbindAll(this.$el)},beforeRouteLeave:function(t,e,n){window.Shiny.unbindAll(this.$el),n()}},m=f,c=Object(s["a"])(m,i,l,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=widget.d0530839.js.map