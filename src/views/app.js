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
    });
    //console.log(this.collection);
    return videoList.render();
  },

  template: templateURL('src/templates/app.html')

});
