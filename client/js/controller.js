myApp.controller('landingPageCtrl', function($scope, $http){
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

myApp.controller('FormCtrl', function($scope, $http){
	$http.get('../public/json/sd-mtbi.json').then(function(data) {
		$scope.mtbiQuestions = data
	})
});

myApp.controller('PostsCtrl', function(){

});
