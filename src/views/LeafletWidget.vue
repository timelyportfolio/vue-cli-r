<template>
  <div class="about">
    <h3>This is a leaflet htmlwidget from R in a lazy-loaded Vue route.</h3>
    <html-widget
      :x = "leafsettings"
      name = "leaflet"
    >
      <div id="leaf1" style="width:100%; height:400px; " class="leaflet html-widget html-widget-output"></div>
    </html-widget>
  </div>
</template>

<script>
  import HtmlWidget from '@/components/HtmlWidget.vue'

  export default {
    name: 'About',

    components: {
      HtmlWidget,
    },

    data: function() {return this.$root.$data}, // this is messy and could be eliminated with vuex

    mounted: function() {
      // bind outputs in Vue to Shiny since they will not be picked up in the initial bind
      //  redundant with main.js binding so that refreshed on route change
      window.Shiny.bindAll(this.$el);
    },
    // beforeUnmount is not called with vue-router so use router navigation guards
    beforeUnmount: function() {
      console.log('about to unmount so unbind');
      window.Shiny.unbindAll(this.$el);
    },
    beforeRouteLeave: function(to, from, next) {
      window.Shiny.unbindAll(this.$el);
      next();
    },
  }
</script>
