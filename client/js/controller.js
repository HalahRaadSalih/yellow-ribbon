myApp.controller('LandingController', function($scope, $http){
	// Each Post should have a raiting and a
	$scope.topPosts = [{
		username: false,
		postID: 48,
		title: "lorem ipsum2 lorem ipsum",
		body: "Street art occupy leggings mumblecore etsy hammock. Dreamcatcher franzen everyday carry, health goth master cleanse pabst man braid schlitz man bun street art. Thundercats meggings deep v, ethical man bun mlkshk keffiyeh. Cold-pressed shoreditch kale chips irony, brunch paleo selfies church-key flexitarian dreamcatcher. Tattooed quinoa cardigan bicycle rights tumblr, pug ramps. Distillery franzen etsy, letterpress chambray single-origin coffee iPhone small batch squid shoreditch. Meditation poutine tilde pinterest, roof party kogi tumblr yuccie cardigan.",
		postedAt: Date.now() - 10000000
	},{
		username: false,
		postID: 47,
		title: "lorem1 ipsum lorem ipsum",
		body: "Street art occupy leggings mumblecore etsy hammock. Dreamcatcher franzen everyday carry, health goth master cleanse pabst man braid schlitz man bun street art. Thundercats meggings deep v, ethical man bun mlkshk keffiyeh. Cold-pressed shoreditch kale chips irony, brunch paleo selfies church-key flexitarian dreamcatcher. Tattooed quinoa cardigan bicycle rights tumblr, pug ramps. Distillery franzen etsy, letterpress chambray single-origin coffee iPhone small batch squid shoreditch. Meditation poutine tilde pinterest, roof party kogi tumblr yuccie cardigan.",
		postedAt: Date.now() - 10000000000
	},{
		username: false,
		postID: 46,
		title: "lorems ipsum lorem ipsum",
		body: "Street art occupy leggings mumblecore etsy hammock. Dreamcatcher franzen everyday carry, health goth master cleanse pabst man braid schlitz man bun street art. Thundercats meggings deep v, ethical man bun mlkshk keffiyeh. Cold-pressed shoreditch kale chips irony, brunch paleo selfies church-key flexitarian dreamcatcher. Tattooed quinoa cardigan bicycle rights tumblr, pug ramps. Distillery franzen etsy, letterpress chambray single-origin coffee iPhone small batch squid shoreditch. Meditation poutine tilde pinterest, roof party kogi tumblr yuccie cardigan.",
		postedAt: Date.now() - 100000000
	}]
});

myApp.controller('FormController', function($scope, $http){
	$http.get('../public/json/sd-mtbi.json').then(function(data) {
		$scope.mtbiQuestions = data;
	})
});

myApp.controller('SigninController', function($scope, $location){
	$scope.title = "Sign In";
	$scope.errors = "";

	$scope.signin = function() {
		$location.path("/home");
	}
});

myApp.controller('SignupController', function($scope, $location){
	$scope.title = "Sign Up";
    $scope.errors = "";

	// $scope.signup = function() {
	// 	if ($scope.user.password !== $scope.user.confirm) {
	// 		$scope.errors = "Password doesn't match";
	// 	} else {
	// 		UserService.signup($scope.user).then(function(data) {
	// 			UserService.setCurrentUser(data);
	// 			$location.path('/home');
	// 		}).catch(function(data) {
	// 			$scope.errors = data.data;
	// 			$scope.user.password = "";
	// 			$scope.user.confirm = "";
	// 		});
	// 	}
	// }
});

myApp.controller('HomeController', function($scope, $location){
	$scope.title = "Home";
	$scope.questions = [
		{
			profile: "Edward Tierra",
			content: "I need help talking about ...",
			time: "03/29/2015 18:24"

		},
		{
			profile: "Cairo Stewart",
			content: "I am a genius and I can't tell anybody about it... help!",
			time: "02/10/2016 12:06"

		}
	];
});

myApp.controller('PostingController', function(){

});


//
// ANIMATION
//
myApp.animation('.slide', [function() {
    return {
        // make note that other events (like addClass/removeClass)
        // have different function input parameters
        enter: function(element, doneFn) {
        jQuery(element).slideDown(1000, doneFn)
        // remember to call doneFn so that angular
        // knows that the animation has concluded
        },

        move: function(element, doneFn) {
        jQuery(element).fadeIn(1000, doneFn);
        },

        leave: function(element, doneFn) {
        jQuery(element).slideUp(1000, doneFn)
        }
    }
}]);
