var VideoListEntryView = Backbone.View.extend({

  // initialize: function() {
  //   //this.model.on('change', this.render, this);
  // },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },
  
  events: {
    'click': 'handleClick'
  },

  handleClick: function(e) {
    console.log(e);
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});

