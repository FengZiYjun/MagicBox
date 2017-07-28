
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