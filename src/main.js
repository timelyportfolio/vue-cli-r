import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

window.jQuery(document).on("shiny:connected", function () {
  // initialize leaflet with null so that Vue will monitor/watch
  //   Vue 2 unlike Vue 3 does not use proxies
  //   we could also use Vue.set later in the app
  window.Shiny.shinyapp.$inputValues.leafsettings = null;

  new Vue({
    router,
    vuetify,
    render: h => h(App),
    // data based off Shiny input values means we get JS reactivity
    data: window.Shiny.shinyapp.$inputValues,
    mounted: function() {
      // bind outputs in Vue to Shiny since they will not be picked up in the initial bind
      window.Shiny.bindAll(this.$el);
    },
  }).$mount('#app')

  // message handler and function to set a Shiny input for state purposes
  window.Shiny.addCustomMessageHandler("setShinyInput", function(message) {
    window.Shiny.setInputValue(message.input, JSON.parse(message.value).x);

    // trigger shiny:inputchanged event
    var evt = window.jQuery.Event("shiny:inputchanged");
    evt.name = message.input;
    evt.value = message.value;
    evt.binding = null;
    evt.el = null;
    evt.inputType = null;
    window.jQuery(document).trigger(evt);
  });
})

