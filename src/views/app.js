var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    var videoList = new VideoListView({
      el: this.$('.list'),
      collection: this.collection
    }).render();
    var videoPlayer = new VideoPlayerView({
      el: this.$('.player'),
      collection: this.collection
    }).render();
    //console.log(this.collection);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
