(function(t){function e(e){for(var a,o,s=e[0],u=e[1],l=e[2],c=0,d=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function o(t){return s.p+"js/"+({widget:"widget"}[t]||t)+"."+{widget:"d0530839"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(t);var l=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}r[t]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-main",[n("v-btn",{attrs:{to:"/"}},[t._v("Home")]),n("v-btn",{attrs:{to:"/widget"}},[t._v("LeafletWidget")]),n("router-view")],1)],1)},i=[],o={name:"App",data:function(){}},s=o,u=n("2877"),l=n("6544"),c=n.n(l),f=n("7496"),d=n("40dc"),p=n("8336"),h=n("132d"),m=n("adda"),v=n("f6c4"),y=n("2fa4"),g=Object(u["a"])(s,r,i,!1,null,null,null),w=g.exports;c()(g,{VApp:f["a"],VAppBar:d["a"],VBtn:p["a"],VIcon:h["a"],VImg:m["a"],VMain:v["a"],VSpacer:y["a"]});n("d3b7"),n("3ca3"),n("ddb0");var b=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hello-world")},_=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"6"}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"shiny-plot-output",staticStyle:{width:"100%",height:"400px"},attrs:{id:"plot1"}})]),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vue/Vuetify + R/Shiny ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},C=[],k={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}},mounted:function(){window.Shiny.bindAll(this.$el)}},V=k,S=n("62ad"),O=n("a523"),L=n("0fd9"),A=Object(u["a"])(V,j,C,!1,null,null,null),E=A.exports;c()(A,{VCol:S["a"],VContainer:O["a"],VImg:m["a"],VRow:L["a"]});var P={name:"Home",components:{HelloWorld:E},beforeRouteLeave:function(t,e,n){window.Shiny.unbindAll(this.$el),n()}},$=P,M=Object(u["a"])($,x,_,!1,null,null,null),T=M.exports;a["a"].use(b["a"]);var H=[{path:"/",name:"Home",component:T},{path:"/widget",name:"LeafletWidget",component:function(){return n.e("widget").then(n.bind(null,"410d"))}}],I=new b["a"]({routes:H}),W=I,q=n("f309");a["a"].use(q["a"]);var N=new q["a"]({});a["a"].config.productionTip=!1,window.jQuery(document).on("shiny:connected",(function(){window.Shiny.shinyapp.$inputValues.leafsettings=null,new a["a"]({router:W,vuetify:N,render:function(t){return t(w)},data:window.Shiny.shinyapp.$inputValues,mounted:function(){window.Shiny.bindAll(this.$el)}}).$mount("#app"),window.Shiny.addCustomMessageHandler("setShinyInput",(function(t){window.Shiny.setInputValue(t.input,JSON.parse(t.value).x);var e=window.jQuery.Event("shiny:inputchanged");e.name=t.input,e.value=t.value,e.binding=null,e.el=null,e.inputType=null,window.jQuery(document).trigger(e)}))}))},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.e50765c6.js.map