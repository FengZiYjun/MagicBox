
/**
 * start the program
 */
function main(){
	//var userName = getUserName();
	//var phoneNum = getPhoneNumber(userName);
	//var location = getPhoneLocation(phoneNum);
	var images = getImage();

	setInterval(function(){
		//images = getImage();
		var profiles = getProfileList();
		replaceImage(profiles, "http://placekitten.com/g");
		var allImages = getImage();
		replaceImage(allImages, "http://placekitten.com/g");		
	}, 3000);

		
}

main();