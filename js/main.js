let lotteryArray = [];
	let lotteryNumbers = [];
	let chosenNumbers = [];

	for (let i=1; i<50; i++) {
		lotteryArray.push(i);
	}
	
	console.log (lotteryArray);
	
	function pickNumbers () {
		
			// Generate a random number from the array
			let random = Math.floor(Math.random() * lotteryArray.length);
			let number = lotteryArray[random];
			
			console.log(number);
			
			// Add the number to the array
			lotteryArray.splice(random, 1);
			lotteryNumbers.push(number); 
			
			//print the array 
			let chosenNumbers = lotteryNumbers.join(",");
			
		 $("#list").append('<li>' + number + '</li>');
		
	}


	
	function start() { 
	
		timer = setInterval(function() {
	
			pickNumbers();
			
			
			if(lotteryNumbers.length > 2) {
				window.clearInterval(timer);
				let sortNumbers = lotteryNumbers.sort(function(a,b){return a-b;});
				$('#list li').each(function (index) {
				    $(this).text(sortNumbers[index]);
				});
			}
		}, 1000); 
	
	}