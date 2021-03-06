
/**
 * @method getUserName
 * @return {string} userName
 */
function getUserName(){
	var username = prompt('hello, what\'s your name?');
	while(!username){
		username = prompt('You didn\'t enter a name. Try again.');
	}
	return username;
}


/**
 * ask the user his/her phone number.
 * @param  {string} username
 * @return {string} phoneNum
 */
function getPhoneNumber(username){
	var phoneNum = prompt(username +', what\'s your photo number?');
	
	while(!phoneNum){
		phoneNum = prompt('You didn\'s enter a phone number. Try again.');
	}
	return phoneNum;
}

/**
* check the validation of the phone number
* @method
* @param {string} phoneNum
* @return {boolean} 
*/
function validatePhoneNumber(phoneNum){
	
	return phoneNum.match(/13\d{9}/);
}

/**
 * get the name of the user location by the phone number.
 * @param  {string} phoneNum
 * @return {string} the name of the location
 */
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