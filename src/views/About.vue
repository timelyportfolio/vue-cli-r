<template>
  <div class="about">
    <h1>This is an about page with a leaflet htmlwidget from R</h1>
    <html-widget
      :x = "leafsettings"
      name = "leaflet"
    >
      <div id="leaf1" style="width:100%; height:400px; " class="leaflet html-widget html-widget-output shiny-bound-output"></div>
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

    data: function() {return this.$root.$data}
  }
</script>
