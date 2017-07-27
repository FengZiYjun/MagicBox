
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

				
function getUserName(){
	var username = prompt('hello, what\'s your name?');
	while(!username){
		username = prompt('You didn\'t enter a name. Try again.');
	}
	return username;
}

function getPhoneNumber(username){
	var phoneNum = prompt(username +', what\'s your photo number?');
	
	while(!phoneNum){
		phoneNum = prompt('You didn\'s enter a phone number. Try again.');
	}
	return phoneNum;
}

function validatePhoneNumber(phoneNum){
	
	return phoneNum.match(/13\d{9}/);
}

function getPhoneLocation(phoneNum) {
	var locationName;

	if(validatePhoneNumber(phoneNum)){

		var phonePattern = /(13\d)\d{7}/;
		var matched = phonePattern.exec(phoneNum);
		var areaCode = matched[1];
		locationName = mbValues.areaCodes[areaCode];

	} else {
		locationName = 'Somewhere';
	}
	
	return locationName;
}

/*
var output = '<h1>hello,' + username + '!</h1>' ;

if (validatePhoneNumber(phoneNum)) {
	
	var userLocation = getPhoneLocation(phoneNum);

	output = output + 
			'<p>' + mbValues.projectName + ' ' + mbValues.versionNumber + '</br>' +
			' account on: ' + mbValues.currentTime + '</br>' +
			'phone number: ' + phoneNum + '</p>' + 
			'</br><p>' + 'You are at ' + userLocation + '</p>';
}else{
	output = output + '<h2>invalid photo number: </h2>' + phoneNum;
}

document.body.innerHTML = output;
*/

function getImage(){
	var images = document.querySelectorAll('#pagelet_ego_pane > div > div > div > div img');
	return images;
}


function getImageHeight(image){
	return image.height;
}

function getImageWidth(image){
	return image.width;
}

function replaceImage(images, location){
	var baseImageURL, height, width, image;
	switch(location){
		case 'Beijing': 
			baseImageURL = 'http://placepuppy.it';
			break;
		default: 
			baseImageURL = 'http://placekitten.com/g/';
			break;
	}

	for(var i=0, len=images.length; i<len; i++){
		image = images[i];
		height = getImageHeight(image);
		width = getImageWidth(image);
		image.src = baseImageURL + width + '/' + height;
	}
}

function main(){
	var userName = getUserName();
	var phoneNum = getPhoneNumber(userName);
	var location = getPhoneLocation(phoneNum);
	var images = getImage();

	setInterval(function(){
		images = getImage();
		replaceImage(images, location);
	}, 3000);
}

main();