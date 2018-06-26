var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    // should invoke collection.fetch
    this.fetch({
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true
      }
    });
  },

  parse: function(response) {
    // converts fetched data into array
    return response.items;
  }

});
