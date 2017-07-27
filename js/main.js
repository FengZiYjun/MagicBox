
function main(){
	var userName = getUesrName();
	var phoneNum = getPhoneNumber();
	var location = getPhoneLocation(phoneNum);
	var images = getImage();

	setInterval(function(){
		images = getImage();
		replaceImage(images, location);
	}, 3000);
}

main();