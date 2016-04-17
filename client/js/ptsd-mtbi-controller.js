myApp.controller('PtsdController', function($scope){
	$scope.title = "PTSD Forum";

	$scope.items = [
    {
        title: 'I\'ve lost hope, therapy is a lie',
        description: "Once again I have spent days in my small house unable to move. I have been seeing Psychiatrists and therapists for 20 years and nothing has helped. People keep telling me to get help what is that? Constant anxiety, teeth grinding, constant vigilance waiting for the next attack. I wish I was less of a coward and could end it all tonight. Burned through maybe 100 or 200 thousand dollars in my lifetime on help?, I'm poor, the Jeep I make payments on is breaking down. All I want to do is to find the next fix, drink or video game to distract me, from what? Why am I in pain, I am so alone. You will have this next appointment and get medication and feel better in a few weeks. I'm supposed to be happy about the next shiny thing I will buy, the next rifle or saddle that will sit in the corner. I hear a noise, is someone walking on my porch and coming to my front door? No it's the sound of my heart beating, I'm still here. It's not working, I hoped it would. The medication is making me sick, making me less of a man. The worst pain is realizing it was all for nothing, it is all false hope.",
        author: 'FoxBlueRiver',
        createdAt: Date.now(),
        votes: 1,
        favorite: false,
        commentBool: false,
        comments: [{
            comment: "I'm sorry you feel all the shit you feel, and i'm sorry you feel alone. I'm glad you found this sub so that you have just a bit of an outlet.",
            author: 'Mtndreamsinger'
        },
		{
			comment: "Have you tried cannabis therapy? It's changing lives",
			author: 'insurgi'
		},
		{
            comment: "Have you tried EMDR and/or internal family systems therapy? Both have done wonders in helping me move forward. If you haven't yet check out The Body Keeps The Score by Bessel Van Der Kolk.",
            author: 'Drabbeynormalblues'
        },
		{
			comment: "Diet needs to get better, please trust me. Less meat, more green leafy veg. Oatmeal. Get your PH level in check. I bet your acidity levels are very high. Read up on acidity and how it effects metabolism, mood, nutrition, weight etc... I recently started adding baking soda to water to neutralize my ph. I'm rooting for you. PM me anytime. :-)",
			author: 'AwkwardFeel'
		}],
        addCommentsBool: false
    },
    {
        title: 'I have (had) PTSD, recovered after years of treatment, and now another traumatic event happredrd and its all back',
        description: "It happened again. First time was when I was 7, now it happened again years later. I can't go to the doctor again, I can't go through the entire process again. I can't let my family know it will end badly. I am afraid ill lose my girlfriend, that I will break out with her in the midst of an attack. I am not going outside I am scared. Please help me get some sense back as it is all falling apart as we speak. Please.",
        author: 'orrzxz',
        createdAt: Date.now(),
        votes: 5,
        favorite: false,
        commentBool: false,
        comments: [{
            comment: "This happened to me Christmas before last, I resisted asking for help because I refused to accept that I was not well etc, I started getting all sorts of suicidal ideation followed by a desire to commit suicide. Please get help, hopefully you have a group of close friends that you can trust, explain that you are having a rough time right now and may need support from them (some will likely be really helpful, some will seem indifferent as they don't know what to do and if you're unlucky some will be counter productive, leave the last group out of this). My second and third traumas (completely dissimilar to original trauma) made me realise that I was not fully recovered from my original trauma and have forced me to do more work to uncover what happened to me and why, I feel better now than I did before they happened. Telling your girlfriend will likely help if she's worth having around (if people can't accept trauma they're not worth it). You've done this once before, this time you know what you're doing, you don't need luck because you're strong enough without it. Drop me a message on here if you feel you need some support or want to ask some questions.",
            author: 'gearnut'
        },
		{
			comment: "Trauma is trauma. It's amazing that you can be alright again, and then wham, back to square one, or nearly so. Selfcare is important now, and maybe you can talk to someone that isn't your family?",
			author: 'crazy_cat'
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
