

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

// var Users = Backbone.Collection.extend({
// 	model: User,
// 	url: 'http://localhost:3000/users.json'
// });



// //================== VIEWS =================//


//=== NAV BAR/MENU VIEW ===//
var HeaderView = Backbone.View.extend({
  tagName: 'div',
  className: 'headerView',
  template: $('#header-template').html(),
  render: function() {
    var html = Mustache.render(this.template);
		this.$el.html(html);
		return this;
  }
});

// //=== HOME PAGE VIEW ===//
// var MainMenuView = Backbone.View.extend({
//   tagName: 'div',
//   className: 'container',
//   template: $('#mainMenuTemplate').html(),
//   render: function() {
//     var html = Mustache.render(this.template);
// 		this.$el.html(html);
// 		return this;
//   }
// });


// //=== CONTACT ITEM VIEW - nearby friends ===//
// var ContactItemView = Backbone.View.extend({
//   tagName: 'div',
//   className: 'col-md-3 col-sm-6 hero-feature',
//   template: $('#quizMenuItemTemplate').html(),

//   render: function() {
//     var html = Mustache.render(this.template, this.model);
// 		this.$el.html(html);
//     if (this.model.enabled) {
//       this.$el.find('#start-quiz').css('display','inline-block')
//     }
//     else { //SET BACK TO DISPLAY NONE
//       this.$el.find('#start-quiz').css('display','none')
//     }
// 		return this;
//   }
// });


//=== CHANGE STATUS VIEW ===//
var StatusChangeView = Backbone.View.extend({
  tagName: 'main',
  className: 'cd-content',
  template: $('#change-status-template').html(),

//   //change user score info when click Submit
//   events: {
//   	'click #submitAnswers' : 'saveScore'
//   },

//   saveScore: function(event){
//   	var currentUserId = $('.user-id').html()
//   	$.ajax({
//   		url: 'http://localhost:3000/api/users/' +currentUserId,
//   		data: { score: score},
//   		type: 'patch'
//   	});
// 	}, , this.model.toJSON()

  render: function() {
    var html = Mustache.render(this.template);
		this.$el.html(html);
		return this;
  }
});



// //=========== ROUTER DECLARATION ===========//

var Router = Backbone.Router.extend({

	routes: {
			"_=_": "home",
			"status": "updateStatus",
			"contacts/:id": "showContact"
	},

	
	home: function(){
		setupPage();

		var header = new HeaderView();
		$('#mainContainer').append(header.render().el);

		var current_user_id = $('#current-user-id').html();
		
		//======to show user friends list
		// var contacts = new Contacts();
		// contacts.fetch().done(function(contacts){
		// 	_.each(contacts, function(contact){
		// 		var contactItemView = new ContactItemView({ model: contact});
		// 		$('#listArea').append(contactItemView.render().el);
		// 	});
		// });
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

