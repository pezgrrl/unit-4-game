$( document ).ready(function() {
            var audio = new Audio('Cheering 3-SoundBible.com-1680253418.mp3');
                audio.play();
            var userScore = 0
			var wins = 0
			var losses = 0 
			var crystal1 = 0
			var crystal2 = 0
			var crystal3 = 0
			var crystal4 = 0


    var roundStart = function(){

        crystal1 = Math.floor((Math.random() * 12) + 1);
        crystal2 = Math.floor((Math.random() * 12) + 1);
        crystal3 = Math.floor((Math.random() * 12) + 1);
        crystal4 = Math.floor((Math.random() * 12) + 1);

        randomNum = Math.floor((Math.random() * 108) + 17);
				$("#randomNum").text(randomNum);

				userScore = 0
				$("#user_score").text(" " + userScore);



				console.log(crystal1);
				console.log(crystal2);
				console.log(crystal3);
				console.log(crystal4);
				console.log(randomNum);

			};

        roundStart(),



			$("#redcrystal").click(function(){
				userScore = userScore + crystal1;
				$("#user_score").text(" " + userScore);
				compare();
			}),

			$("#bluecrystal").click(function(){
				userScore = userScore + crystal2;
				$("#user_score").text(" " + userScore);
				compare();
			}),

			$("#yellowcrystal").click(function(){
				userScore = userScore + crystal3;
				$("#user_score").text(" " + userScore);
				compare();
			}),

			$("#greencrystal").click(function(){
				userScore = userScore + crystal4;
				$("#user_score").text(" " + userScore);
				compare();
			});


    		
        var compare = function(){
            if(userScore > randomNum){
                alert("you lose.");
                losses = losses + 1
                $("#losses").text(losses);
                roundStart();
                
            }
            if (userScore === randomNum){
                alert("Winner, winner, Katelyn, time for dinner!");
                wins = wins + 1
                $("#wins").text(wins);
                roundStart();
            }	
        };


    });