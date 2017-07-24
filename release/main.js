var projectName = 'MagicBox';
var versionNumber = '0.0.1';
var currentDate = new Date();

var currentTime = currentDate.getFullYear() + '-' +
				(currentDate.getMonth() + 1) + '-' + 
				currentDate.getDate() + 'at' +
				currentDate.getHours() + ':' +
				currentDate.getMinutes() + ':' +
				currentDate.getSeconds();

var username = prompt('hello, what\'s your name?');
document.body.innerHTML = '<h1>hello,' + username + '!</h1>' + 
					'<p>' + projectName + ' ' + versionNumber + 
					' account on: ' + currentTime + '</p>';