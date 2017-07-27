
function getImageHeight(image){
	return image.height;
}

function getImageWidth(image){
	return image.width;
}

function replaceImage(images, location){
	var baseImageURL, height, width, image;
	switch(location){
		case 'Beijing': 
			baseImageURL = 'http://placepuppy.it';
			break;
		default: 
			baseImageURL = 'http://placekitten.com/g/';
			break;
	}

	for(var i=0, len=images.length; i<len; i++){
		image = images[i];
		height = getImageHeight(image);
		width = getImageWidth(image);
		image.src = baseImageURL + width + '/' + height;
	}
}