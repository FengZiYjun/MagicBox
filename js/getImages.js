/**
 * @return {object}
 */
function getImage(){
	var images = document.querySelectorAll('img');
	return images;
}

function getProfile(){
	var node_list = document.querySelectorAll('#u_0_u > div > div._4bl7 > a > div > img');
	return node_list[0];
}

function getProfileList(){
	var list = document.querySelectorAll('#pagelet_ego_pane > div > div > div > div > div.ego_unit_container');
	var images = list[0].querySelectorAll('img');
	return images;
}