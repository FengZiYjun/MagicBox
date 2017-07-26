
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

document.body.innerHTML = output;
