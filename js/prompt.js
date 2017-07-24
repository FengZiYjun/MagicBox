
var username = prompt('hello, what\'s your name?');
document.body.innerHTML = '<h1>hello,' + mbValues.username + '!</h1>' + 
					'<p>' + mbValues.projectName + ' ' + mbValues.versionNumber + 
					' account on: ' + mbValues.currentTime + '</p>';