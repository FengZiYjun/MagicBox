
var mbValues = {
	projectName : 'MagicBox',
	versionNumber : '0.0.1',
	currentDate : new Date(),
	currentTime : "",
	areaCodes: {
		'131': 'SiliconValley',
		'134': 'Las Vegas',
		'136': 'Los Angelas',
		'138': 'Mempis',
		'139': 'Beijing',
		'130': 'London'
	}
};

//mbValues.currentDate = new Date();

mbValues.currentTime = mbValues.currentDate.getFullYear() + '-' +
				(mbValues.currentDate.getMonth() + 1) + '-' + 
				mbValues.currentDate.getDate() + ' at ' +
				mbValues.currentDate.getHours() + ':' +
				mbValues.currentDate.getMinutes() + ':' +
				mbValues.currentDate.getSeconds();

var username = prompt('hello, what\'s your name?');

var phoneNum = prompt(username +', what\'s your photo number?');

var phonePattern = /(13\d)\d{7}/;

var output = '<h1>hello,' + username + '!</h1>' ;

if (phonePattern.test(phoneNum)) {
	var matched = phonePattern.exec(phoneNum);
	var areaCode = matched[1];
	var userLocation = mbValues.areaCodes[areaCode];

	output = output + 
			'<p>' + mbValues.projectName + ' ' + mbValues.versionNumber + '</br>' +
			' account on: ' + mbValues.currentTime + '</br>' +
			'phone number: ' + phoneNum + '</p>' + 
			'</br><p>' + 'You are at ' + userLocation + '</p>';
}else{
	output = output + '<h2>invalid photo number: </h2>' + phoneNum;
}

//document.body.innerHTML = output;


var images = document.querySelectorAll('#pagelet_ego_pane > div > div > div > div img');

for(var image in images){
	console.log(image.src);
}

var greeting = document.getElementById('greeting');

greeting.addEventListener('click', function(){

	if(greeting.innerHTML.match(/world/)){
		greeting.innerHTML = 'old friend!';
	} else {
		greeting.innerHTML = 'Hello, my bro!';
	}
	
});


