var greeting = document.getElementById('greeting');

greeting.addEventListener('click', function(){

	if(greeting.innerHTML.match(/world/)){
		greeting.innerHTML = 'old friend!';
	} else {
		greeting.innerHTML = 'Hello, my bro!';
	}
	
});


