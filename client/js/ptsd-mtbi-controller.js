myApp.controller('PtsdController', function($scope){
	$scope.title = "PTSD Forum";

	$scope.items = [
    {
        title: 'I\'ve lost hope, therapy is a lie',
        description: "Once again I have spent days in my small house unable to move. I have been seeing Psychiatrists and therapists for 20 years and nothing has helped. People keep telling me to get help what is that? Constant anxiety, teeth grinding, constant vigilance waiting for the next attack. I wish I was less of a coward and could end it all tonight. Burned through maybe 100 or 200 thousand dollars in my lifetime on help?, I'm poor, the Jeep I make payments on is breaking down. All I want to do is to find the next fix, drink or video game to distract me, from what? Why am I in pain, I am so alone. You will have this next appointment and get medication and feel better in a few weeks. I'm supposed to be happy about the next shiny thing I will buy, the next rifle or saddle that will sit in the corner. I hear a noise, is someone walking on my porch and coming to my front door? No it's the sound of my heart beating, I'm still here. It's not working, I hoped it would. The medication is making me sick, making me less of a man. The worst pain is realizing it was all for nothing, it is all false hope.",
        author: 'The Mother Goose',
        createdAt: Date.now(),
        votes: 1,
        favorite: false,
        commentBool: false,
        comments: [{
            comment: 'coolski',
            author: 'coolski'
        },{
            comment: 'this sick beat tm taylor swift lol',
            author: 'Viacom'
        }
        ],
        addCommentsBool: false
    },
    {
        title: 'I have (had) PTSD, recovered after years of treatment, and now another traumatic event happredrd and its all back',
        description: "It happened again. First time was when I was 7, now it happened again years later. I can't go to the doctor again, I can't go through the entire process again. I can't let my family know it will end badly. I am afraid ill lose my girlfriend, that I will break out with her in the midst of an attack. I am not going outside I am scared. Please help me get some sense back as it is all falling apart as we speak. Please.",
        author: 'The Mother Goose',
        createdAt: Date.now(),
        votes: 5,
        favorite: false,
        commentBool: false,
        comments: [{
            comment: 'coolski',
            author: 'coolski'
        }],
        addCommentsBool: false
    },
    {
        title: 'Need advice on a boss who would not understand',
        description: "Tldr: friend is having the worst panic attack I've ever heard/seen and 'understanding' boss literally will not let her leave. My best friend has PTSD for a very abusive relationship and got a job from a family friend as a front desk person. Her now boss/friend said she completely understands her situation and will do her best to help. Well apparently not. Every time she calls out, always 12 or more hours in advance, her boss tries to guilt her into coming in or will just not respond and then acts like she never got a vm or text. Today, my friend is having a really bad attack and her boss is refusing to let her leave. She called me and she can't stop crying, couldn't catch her breath, and it honestly sounded like she was having a heart attack. I am bipolar and suffer from anxiety as well, but this just sounded so different Her boss came in and is now refusing to let her leave and said if she doesn't sit at the front desk that she is going to make her stay late. So what can we do right now?? She gets off at 2 and I think if she stays she's going to actually have a heart attack.",
        author: 'The Mother Goose',
        createdAt: Date.now(),
        votes: 30,
        favorite: false,
        commentBool: false,
        comments: [{
            comment: 'coolski',
            author: 'coolski'
        }],
        addCommentsBool: false
    },
    {
        title: 'I have PTSD and I am going to be OKAY',
        description: "I was diagnosed with PTSD 2 days go. I have been living with PTSD since the trauma occurred when i was 9. And man, do I have a lot on my mind! I'd love to be able to talk about just everything, but i'm not quite ready to be that open. However there is something I do want to say. I'm going to be OK. Now that I'm diagnosed, for the first time in my life I feel like everything will be ok because I will finally have people who understand me. Yes, things are going to be hard. But on the bright side, they've already been as worse as they possibly can! Holy hell I'm still alive after 13 years of living with undiagnosed PTSD! Look at me fucking go! I'm going to be OK because not only can I believe in myself now, but I also will never be as alone as I feel.",
        image: "",
        author: 'The Mother Goose',
        createdAt: Date.now(),
        votes: 0,
        favorite: false,
        commentBool: false,
        comments: [{
            comment: 'coolski',
            author: 'coolski'
        }],
        addCommentsBool: false
    }];

    $scope.showComments = function(item) {
        if (item.commentBool === true) {
            item.commentBool = false;
        } else {
            item.commentBool = true;
        }
    }

    $scope.search = {
        string: ''
    }

    $scope.comment = {
    }

    $scope.item = {
        votes: 0,
        favorite: false,
        createdAt: Date.now(),
        comments: []
    };

    $scope.showForm = false;


    $scope.addAComment = function(item) {
        if (item.addCommentsBool === true) {
            item.addCommentsBool = false;
        } else {
            item.addCommentsBool = true;
        }
    }
    $scope.showF = function() {
        if ($scope.showForm === true) {
            $scope.showForm = false;
        } else {
            $scope.showForm = true;
        }
        console.log('hit')
    }
    $scope.upVote = function(item) {
        item.votes += 1;
    }
    $scope.downVote = function(item) {
        item.votes -= 1;
    }
    $scope.addPost = function(item, myForm) {
        if(myForm.$valid){
            item.votes = 0;
            item.createdAt = Date.now();
            item.commentBool = false;
            item.addCommentsBool = false;
            $scope.items.push(item);
            $scope.item = {};
            $scope.showForm = false;
        } else {
            console.log(myForm);
        }
    }
    $scope.addComment = function(comment, item){
        item.comments.push(comment);
        $scope.comment = {};
        item.addCommentsBool = false;
    }
    $scope.sortReverse  = true;
});

myApp.controller('MtbiController', function($scope){
    $scope.title = "mTBI Forum";
})
