//========================== VIEWS =========================//


//============= CHANGE STATUS PAGE ===========//
var StatusChangeView = Backbone.View.extend({
  tagName: 'main',
  className: 'cd-content',
  template: $('#change-status-template').html(),
  render: function() {
    var html = Mustache.render(this.template);
    this.$el.html(html);
    return this;
  }
});

//======= STATUS MENU ITEMS ========//
var StatusItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'spread',
  template: $('#status-item-template').html(),

  //change user status when click button
  events: {
    'click .menuItem' : 'changeStatus'
  },

 //  initialize: function() {
 //   this.listenTo(this.model, 'change', this.render);
  // },

  changeStatus: function(event){
    var that = this;
    //set "status" to name of the food object
    var status = this.model.name;
    console.log(status);
    var currentUserId = $('#current-user-id').html();
    
    // var currentUser = new User({id: currentUserId});
    // currentUser.fetch().done(function(){
    //  currentUser.status = status;
    //  currentUser.save();
    // });

    //AJAX METHOD for updating DB
    $.ajax({
      url: 'https://hungrapp.herokuapp.com/users/' + currentUserId,
      // url: 'localhost:3000/users/' + currentUserId,
      data: { status: status},
      type: 'patch'
    }).done(function(data){
      that.render();
    });

    //BACKBONE METHOD - make a model user and
    //make view listen to model after user.save()
    //make an initialize method
    //listen to the model, render when changed..
  },

  render: function() {
    var html = Mustache.render(this.template, this.model);
    this.$el.html(html);
    return this;
  }
});

//==== MAIN MENU PAGE ===//
var MenuView = Backbone.View.extend({
  tagName: 'main',
  className: 'cd-content',
  template: $('#main-menu-template').html(),
  render: function() {
    var html = Mustache.render(this.template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

//==== NAV BAR / FRIENDS PAGE MENU ===//
var HeaderView = Backbone.View.extend({
  tagName: 'main',
  className: 'cd-content',
  template: $('#header-template').html(),
  render: function() {
    var html = Mustache.render(this.template, this.model.toJSON());
		this.$el.html(html);
		return this;
  }
});

//========= CONTACTS LIST ITEM =============//
var ContactItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'contact-list-li animated flipInX',
  template: $('#contact-item-template').html(),











  render: function() {
    var html = Mustache.render(this.template, this.model);
		this.$el.html(html);
		return this;
  }
});







// BACKBONE METHOD FOR CHANGING DATABASE
// var DetailsView = Backbone.View.extend({

//   initialize: function() {
//     this.listenTo(this.model, 'change', this.render);
//   },

//   render: function() {
//     var template = $('#details-template').html();
//     var html = Mustache.render(
//       template, 
//       this.model.toJSON()
//     );

//     this.$el.html(html);
//     return this;
//   }
// });