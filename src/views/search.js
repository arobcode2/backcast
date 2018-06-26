var SearchView = Backbone.View.extend({

  events: {
    // submit event
    'keyup': 'handleKeyUp',
    'click button': 'searchTerm'
  },
  
  searchTerm: function() {
    var userInput = this.$('.form-control').val();
    if (userInput) {
      this.collection.search(userInput);
    }
    this.$('.form-control').val('');
  },
  
  handleKeyUp: function(e) {
    if (e.keyCode === 13) {
      this.searchTerm();
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
