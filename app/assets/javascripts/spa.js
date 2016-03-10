

//========== SET UP PAGE ==========//

//=== CLEAR SCREEN ===//collect all elements and remove from main container
var setupPage = function() {
  $('#mainContainer').children().each( function(child) {
      $(this).remove();
	});
}



//================= MODELS =================//
var Status = Backbone.Model.extend({
	urlRoot: 'http://localhost:3000/statuses'
});

var User = Backbone.Model.extend({
	urlRoot: 'http://localhost:3000/users'
});



 
// //=============== COLLECTIONS ==============//
var Statuses = Backbone.Collection.extend({
	model: Status,
	url: 'http://localhost:3000/statuses'
});

var Users = Backbone.Collection.extend({
	model: User,
	url: 'http://localhost:3000/users'
});



// //================== VIEWS =================//


//=== NAV BAR/MENU VIEW ===//
var HeaderView = Backbone.View.extend({
  tagName: 'main',
  className: 'cd-content',
  template: $('#header-template').html(),
  render: function() {
    var html = Mustache.render(this.template, this.model);
		this.$el.html(html);
		return this;
  }
});

//=== CONTACTS LIST ITEM VIEW ===//
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


//=== CHANGE STATUS PAGE VIEW ===//
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

//=== STATUS MENU ITEM VIEW ===//
var StatusItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'spread',
  template: $('#status-item-template').html(),

  //change user status when click button
  events: {
  	'click .menuItem' : 'changeStatus'
  },

  changeStatus: function(event){
  	var currentUserId = $('#current-user-id').html();
  	var status = this.model.name;
  	console.log(status);
		$.ajax({
			url: 'http://localhost:3000/users/' + currentUserId,
			data: { status: status},
			type: 'patch'
		}); 	
	},

  render: function() {
    var html = Mustache.render(this.template, this.model);
		this.$el.html(html);
		return this;
  }
});



// //=========== ROUTER DECLARATION ===========//

var Router = Backbone.Router.extend({

	routes: {
			"_=_": "home",
			"status": "updateStatus",
			"users/:id": "showContact"
	},


	home: function(){
		setupPage();
		var currentUserId = $('#current-user-id').html();
		var currentUser = new User({id: currentUserId});
		currentUser.fetch().done(function(){
			var status = new Status({name: currentUser.status});
			status.fetch().done(function(){
	  		var header = new HeaderView({ model: status});
				$('#mainContainer').append(header.render().el);
			}); 
		});
		
		//======to show user friends list - just doing all users atm
		var contacts = new Users();
		contacts.fetch().done(function(contacts){
			_.each(contacts, function(contact){
				var contactItemView = new ContactItemView({ model: contact});
				$('#listArea').append(contactItemView.render().el);
			});
		});
	},

	updateStatus: function(){
		setupPage();
		var statusChangeView = new StatusChangeView();
		$('#mainContainer').append(statusChangeView.render().el);

		var statuses = new Statuses();
		statuses.fetch().done(function(statuses){
			_.each(statuses, function(status){
				console.log(status.name);
				var statusItemView = new StatusItemView({ model: status});
				$('#listArea').append(statusItemView.render().el);
			});

		});

	},

	
	showContact: function(){
		
	}

});

//============== START ROUTER ==============//
$(document).ready( function() {
  console.log('Initiating router...');
  var router = new Router();
  Backbone.history.start();
});

