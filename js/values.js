
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