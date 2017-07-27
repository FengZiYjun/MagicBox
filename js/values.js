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

				