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
	$scope.title = "Sign In"
	$scope.errors = "";

	// $scope.signin = function() {
	// 	UserService.login($scope.user).then(function(data) {
	// 		UserService.setCurrentUser(data);
	// 		$location.path("/home");
	// 	}).catch(function(data) {
	// 		$scope.errors  = data.data;
	// 	});
	// }
});

myApp.controller('SignupController', function($scope, $location){
	$scope.title = "Sign Up"
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

myApp.controller('HomeController', function($scope){
	$scope.title = "Home"
});

myApp.controller('PostingController', function(){

});
