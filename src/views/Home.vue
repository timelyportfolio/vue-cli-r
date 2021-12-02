<template>
  <hello-world />
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
    // beforeUnmount is not called with vue-router so use router navigation guards
    beforeRouteLeave: function(to, from, next) {
      window.Shiny.unbindAll(this.$el);
      next();
    },
  }
</script>
