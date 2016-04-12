myApp.filter('username', function() {
	return function(item) {
		return input ? input : "Private Username"
	}
})

// add factory for making api requests and passing data from one ctrl to another

myApp.factory('ApiFactory', function(){
	
})

// look up how to pass the posts from on ctrl to another using factories

myApp.factory('HoldingFactory', function(){
	
})
