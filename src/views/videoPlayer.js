var VideoPlayerView = Backbone.View.extend({

  // initialize: function() {
  //   this.render();
  // },

  render: function() {
    console.log(this.model.attributes, 'random string');
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
