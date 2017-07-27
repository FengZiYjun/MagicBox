function getUserName(){
	var username = prompt('hello, what\'s your name?');
	while(!username){
		username = prompt('You didn\'t enter a name. Try again.');
	}
	return username;
}

function getPhoneNumber(){
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
	var phonePattern = /(13\d)\d{7}/;
	var matched = phonePattern.exec(phoneNum);
	var areaCode = matched[1];
	var locationName = mbValues.areaCodes[areaCode];
	if(locationName === undefined){
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