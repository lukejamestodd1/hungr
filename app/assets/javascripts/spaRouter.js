//====================== ROUTER DECLARATION ====================//

var Router = Backbone.Router.extend({

	routes: {
			"_=_": "home",
			"menu": "showMenu",
			"status": "updateStatus",
			"users/:id": "showContact",
			"networks": "addContacts"
	},

	//=========== HOME PAGE ============= //
	home: function(){
		setupPage();
		var currentUserId = $('#current-user-id').html();
		var currentUser = new User({id: currentUserId});
  		currentUser.fetch().done(function(){
  		var header = new HeaderView({ model: currentUser});
  		console.log('hghgCURRENTUSER',currentUser);
			$('#mainContainer').append(header.render().el);
  	}); 
		
		//to show friends list - just doing all users atm
		var contacts = new Users();
		contacts.fetch().done(function(contacts){
			//don't need 'toJSON' here because it's an array or objects.
			//if sending one model must convert to JSON
			_.each(contacts, function(contact){
				var contactItemView = new ContactItemView({ model: contact});
				$('#listArea').append(contactItemView.render().el);
			});
		});
	},

	//===== MENU =====//
	showMenu: function(){
		setupPage();
		
	},

	//=========== UPDATE STATUS ============= //
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

	//===== USER PROFILE PAGE =====//
	showContact: function(){
		setupPage();
	},

	//===== ADD CONTACTS =====//
	addContacts: function(){
		setupPage();
	}	

});