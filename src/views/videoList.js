var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  render: function() {
    this.$el.empty();
    this.$el.html(this.template());
    var list = this.$('.video-list');
    list.empty();
    
    this.collection.forEach((video) => {
      var newVid = new VideoListEntryView({model: video}).render().el;
      list.append(newVid);
    }, this);
    // this.$el.children().detach();
    // this.$el.html(this.template());
    return this;
  },
  
  // renderVideo: function(video) {
  //   var videoListEntryView = new VideoListEntryView({model: video});
  //   this.$el.append(videoListEntryView.render());
  // },

  template: templateURL('src/templates/videoList.html')

});
