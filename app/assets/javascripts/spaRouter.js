//====================== ROUTER DECLARATION ====================//

var Router = Backbone.Router.extend({
	
	routes: {
			"_=_": "updateStatus",
			"menu": "showMenu",
			"friends": "friendsList",
			"users/:id": "showContact",
			"networks": "addContacts"
	},

	//=========== UPDATE STATUS ============= //
	updateStatus: function(){
		setupPage();
		var statusChangeView = new StatusChangeView();
		$('#mainContainer').append(statusChangeView.render().el);

		var statuses = new Statuses();
		statuses.fetch().done(function(statuses){
			_.each(statuses, function(status){
				var statusItemView = new StatusItemView({ model: status});
				$('#listArea').append(statusItemView.render().el);
			});
		});
	},

	//===== MENU =====//
	showMenu: function(){
		setupPage();

	},

	//=========== FRIENDS LIST PAGE ============= //
	friendsList: function(){
		setupPage();
		var currentUserId = $('#current-user-id').html();
		var currentUser = new User({id: currentUserId});
  		currentUser.fetch().done(function(){
  		var header = new HeaderView({ model: currentUser});
  		console.log('CURRENTUSER object:',currentUser);
			$('#mainContainer').append(header.render().el);
  	}); 
		
		//to show friends list - just doing all users atm
		var contacts = new Users();
		contacts.fetch().done(function(contacts){
			//don't need 'toJSON' here because it's an array or objects.
			//if sending one model must convert to JSON

			//delete current user from friends list display
			// var currentUserListItem = contacts.get(currentUserId);
			// currentUserListItem.destroy();

			_.each(contacts, function(contact){
				var contactItemView = new ContactItemView({ model: contact});
				$('#listArea').append(contactItemView.render().el);
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