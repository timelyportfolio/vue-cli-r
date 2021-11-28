<template>
  <div class="html-widget"><slot></slot></div>
</template>

<script>
  export default {
    name: 'HtmlWidget',
    props: ['x', 'name'],
    methods: {
      // Copied from HTMLWidgets code
      // Implement a vague facsimilie of jQuery's data method
      elementData: function(el, name, value) {
        if (arguments.length == 2) {
          return el['htmlwidget_data_' + name];
        } else if (arguments.length == 3) {
          el['htmlwidget_data_' + name] = value;
          return el;
        } else {
          throw new Error('Wrong number of arguments for elementData: ' +
            arguments.length);
        }
      },
      updateWidget: function() {
        // see comments in mounted which is nearly identical except in update we do not initialize or attach
        //   initial data to the element.  we could clean this up and make one function.
        var component = this
        // use HTMLWidgets.widgets to give us a list of available htmlwidget bindings
        var widgets = window.HTMLWidgets.widgets
        // assume there might be lots, so filter for the one we want
        //  in this case, we want jsonedit
        var widget = widgets.filter(function(widget){
          return widget.name === component.name
        })[0]

        // get our htmlwidget DOM element
        var el = this.$el.querySelector('.html-widget');

        var instance = this.elementData(el, 'init_result')

        if(typeof(instance) === 'undefined') {
          // get our htmlwidget instance with initialize
          instance = widget.initialize(el);
          this.elementData(el, 'init_result', instance);
          widget.renderValue(
            el,
            this.x,
            instance
          )
        }

        widget.renderValue(
          el,
          this.x,
          instance
        )
      }
    },
    mounted: function() {
      if(typeof(this.x) === 'undefined' || this.x === null) { return }
      var component = this;
      // use HTMLWidgets.widgets to give us a list of available htmlwiget bindings
      var widgets = window.HTMLWidgets.widgets;
      // assume there might be lots, so filter for the one we want
      //  in this case, we want jsonedit
      var widget = widgets.filter(function(widget){
        return widget.name === component.name
      })[0];

      // get our htmlwidget DOM element
      var el = this.$el.querySelector('.html-widget');

      // get our htmlwidget instance with initialize
      var instance = widget.initialize(el);
      this.elementData(el, 'init_result', instance);
      widget.renderValue(
        el,
        this.x,
        instance
      );
    },
    // updated not working since does not watch deep
    //   but if the expectation is that data and options are replaced completely
    //   then updated will trigger
    updated: function() {
      this.updateWidget()
    },
    watch: {
      x: {
        handler: function() {console.log('updating');this.updateWidget()},
        //deep: true
      }
    }
  }
</script>
