
var mbValues = {
	projectName : 'MagicBox',
	versionNumber : '0.0.1',
	currentDate : new Date(),
	currentTime : ""
};

//mbValues.currentDate = new Date();

mbValues.currentTime = mbValues.currentDate.getFullYear() + '-' +
				(mbValues.currentDate.getMonth() + 1) + '-' + 
				mbValues.currentDate.getDate() + 'at' +
				mbValues.currentDate.getHours() + ':' +
				mbValues.currentDate.getMinutes() + ':' +
				mbValues.currentDate.getSeconds();

var username = prompt('hello, what\'s your name?');

var phoneNum = prompt(username +', what\'s your photo number?');

var phonePattern = /1\d{10}/;

var output = '<h1>hello,' + username + '!</h1>' ;

if (phonePattern.test(phoneNum)) {
	output = output + 
			'<p>' + mbValues.projectName + ' ' + mbValues.versionNumber +
			' account on: ' + mbValues.currentTime + 'phone number: ' + phoneNum+ '</p>';
}else{
	output = output + '<h2>invalid photo number: </h2>' + phoneNum;
}

document.body.innerHTML = output;
