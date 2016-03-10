

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


// //=== FRIEND UI CARD VIEW - nearby friends ===//
// var QuizItemTemplateView = Backbone.View.extend({
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


// //=== CHANGE STATUS VIEW ===//
// var QuizTitlePageView = Backbone.View.extend({
//   tagName: 'div',
//   className: 'container',
//   template: $('#quizTitlePageTemplate').html(),

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
// 	},

//   render: function() {
//     var html = Mustache.render(this.template, this.model.toJSON());
// 		this.$el.html(html);
// 		return this;
//   }
// });



// //=========== ROUTER DECLARATION ===========//

var Router = Backbone.Router.extend({

	routes: {
			"_=_": "home",
			"menu": "showMenu",
			"status": "updateStatus",
			"contacts/:id": "showContact"
	},

	
	home: function(){
		setupPage();

	 	console.log('HELLO');
		var current_user_id = $('#current-user-id').html();
		console.log(current_user_id);
		var currentUser = new User({id: current_user_id});
		currentUser.fetch().done(function(){
			console.log(currentUser.get('name'));
			console.log(currentUser);
		

		});

		// var mainMenu = new MainMenuView();
		// $('#mainContainer').append(mainMenu.render().el);
		
		// var quizzes = new Quizzes();
		// quizzes.fetch().done(function(quizzes){
		// 	_.each(quizzes, function(quiz){
		// 		var quizItemTemplate = new QuizItemTemplateView({ model: quiz});
		// 		$('#listArea').append(quizItemTemplate.render().el);

		// 	});
		// });
	},

	
	showMenu: function(){
		// setupBody();
		// var quiz = new Quiz({id: qid});
		// quiz.fetch().done(function(){
		// 	console.log(quiz);
		// 	var quizTitlePageView = new QuizTitlePageView({model: quiz});
		// 	$('#mainContainer').append(quizTitlePageView.render().el);

		// 	var questionsAll = new Questions();
		// 	questionsAll.fetch().done(function(questions){

		// 		var questions = questionsAll.where({quiz_id: parseInt(qid)});

		// 		_.each(questions, function(question){
		// 			// console.log(question);
		// 			//make a question view template for each Q
		// 			var questionTemplate = new QuestionPageView({model: question});
		// 			$('#mainContainer').append(questionTemplate.render().el);

		// 			//hide other questions - do this later

		// 		});
		// 	});
		// });
	},

	updateStatus: function(){
		var statuses = new Statuses();
		statuses.fetch().done(function(){



		});
	},

	
	showResults: function(){
		
	},

	
	showTotals: function(){
		
	}
});

//============== START ROUTER ==============//
$(document).ready( function() {
  console.log('Initiating router...');
  var router = new Router();
  Backbone.history.start();
});

