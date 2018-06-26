var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.render, this);
    //this.render();
  },

  render: function(video) {
    if (!video) {
      this.$el.html('<div class="loading">Please wait...</div>');
      return this;
    }
    
    
    //console.log(this.collection.models);
    this.$el.html(this.template(video.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
