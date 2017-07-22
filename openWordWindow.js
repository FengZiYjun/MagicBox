function openWordFile(filepath){
	var wordWindow = openWordWindow();
	var fileContent = loadFile(filepath);
	displayfile(wordWindow, fileContent);
}