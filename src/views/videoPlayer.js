var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    //console.log(this.model.attributes, 'random string');
    //this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.collection.models[0].attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
