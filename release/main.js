/**
 * An magic box object that stores relevent values.
 * @type {Object}
 */
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
/**
 * @return {object}
 */
function getImage(){
	var images = document.querySelectorAll('#pagelet_ego_pane > div > div > div > div img');
	return images;
}


/**
 * @param  {object}
 * @return {int}
 */
function getImageHeight(image){
	return image.height;
}

/**
 * @param  {object}
 * @return {int}
 */
function getImageWidth(image){
	return image.width;
}

/**
 * @param  {object} images
 * @param  {string} location
 */
function replaceImage(images, location){
	var baseImageURL, height, width, image;

	//baseImageURL = '#profile_pic_header_100013144724796';
	//var profile = document.querySelectorAll(baseImageURL);

	switch(location){
		case 'Beijing': 
			baseImageURL = 'https://placepuppy.it';
			break;
		default: 
			baseImageURL = 'https://placekitten.com/g/';
			break;
	}

	for(var i=0, len=images.length; i<len; i++){
		image = images[i];
		height = getImageHeight(image);
		width = getImageWidth(image);
		image.src = baseImageURL + width + '/' + height;
		//image.src = profile.src;
	}
}

/**
 * start the program
 */
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