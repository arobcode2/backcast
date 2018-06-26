var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search('javascript tutorial');
    //  vvv will select the first video anytime a sync event occurs
    this.videos.on('sync', function() {
      this.at(0).select();
    }, this.videos);

    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    
    var videoList = new VideoListView({
      el: '.list',
      collection: this.videos
    }).render();
    
    var videoPlayer = new VideoPlayerView({
      el: '.player',
      collection: this.videos
    }).render(this.videos.at(0));
    var search = new SearchView({
      el: '.search',
      collection: this.videos
    }).render();
    //console.log(this.collection);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
