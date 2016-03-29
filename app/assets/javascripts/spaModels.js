//================= MODELS & COLLECTIONS =================//
var Status = Backbone.Model.extend({
	urlRoot: 'https://hungrapp.herokuapp.com/statuses'
});

var User = Backbone.Model.extend({
	urlRoot: 'https://hungrapp.herokuapp.com/users'
});

var Statuses = Backbone.Collection.extend({
	model: Status,
	url: 'https://hungrapp.herokuapp.com/statuses'
});

var Users = Backbone.Collection.extend({
	model: User,
	url: 'https://hungrapp.herokuapp.com/users'
});


// //================= LOCAL HOST FOR DEVELOPMENT =================//
// var Status = Backbone.Model.extend({
// 	urlRoot: 'http://localhost:3000/statuses'
// });

// var User = Backbone.Model.extend({
// 	urlRoot: 'http://localhost:3000/users'
// });

// var Statuses = Backbone.Collection.extend({
// 	model: Status,
// 	url: 'http://localhost:3000/statuses'
// });

// var Users = Backbone.Collection.extend({
// 	model: User,
// 	url: 'http://localhost:3000/users'
// });

