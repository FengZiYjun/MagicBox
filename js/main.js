
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