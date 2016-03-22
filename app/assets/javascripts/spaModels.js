//================= MODELS & COLLECTIONS =================//
var Status = Backbone.Model.extend({
	urlRoot: 'http://hungrapp.herokuapp.com/statuses'
});

var User = Backbone.Model.extend({
	urlRoot: 'http://hungrapp.herokuapp.com/users'
});

var Statuses = Backbone.Collection.extend({
	model: Status,
	url: 'http://hungrapp.herokuapp.com/statuses'
});

var Users = Backbone.Collection.extend({
	model: User,
	url: 'http://hungrapp.herokuapp.com/users'
});