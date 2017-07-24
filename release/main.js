
var mbValues = {
	projectName : 'MagicBox',
	versionNumber : '0.0.1',
	currentDate : new Date(),
	currentTime : currentDate.getFullYear() + '-' +
				(currentDate.getMonth() + 1) + '-' + 
				currentDate.getDate() + 'at' +
				currentDate.getHours() + ':' +
				currentDate.getMinutes() + ':' +
				currentDate.getSeconds()
};


var username = prompt('hello, what\'s your name?');
document.body.innerHTML = '<h1>hello,' + mbValues.username + '!</h1>' + 
					'<p>' + mbValues.projectName + ' ' + mbValues.versionNumber + 
					' account on: ' + mbValues.currentTime + '</p>';