var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.empty();
    this.collection.forEach(this.renderVideo, this);
    // this.$el.children().detach();
    // this.$el.html(this.template());
    // return this;
  },
  
  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
