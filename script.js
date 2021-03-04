var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function addDeleteButtonToExistingList(){
	//Retrieve existing list
	var existingList = document.querySelectorAll('li');

	for(var i = 0; i < existingList.length; i++){

		var deleteButton = addDeleteButton();

		existingList[i].appendChild(deleteButton);
		deleteButton.addEventListener('click', removeParent);
	}
}

//Return an array of buttons that have the class name "doneBtn"
var doneButton = document.getElementsByClassName("doneBtn");

//Iterate through the array of buttons with class name "doneBtn"
for(var i = 0; i < doneButton.length; i++){
	doneButton[i].addEventListener('click', removeItem);
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var newButton = document.createElement('button');
	newButton.appendChild(document.createTextNode('Done'));
	li.appendChild(newButton);

	newButton.addEventListener("click", removeItem);

	var deleteButton = addDeleteButton();
	li.appendChild(deleteButton);

	deleteButton.onclick = removeParent;

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDeleteButton(){
	var deleteButton = document.createElement('button');
	deleteButton.appendChild(document.createTextNode('Delete!'));
	return deleteButton;
}

function removeItem(event){
	event.target.parentNode.classList.toggle('done');
}

function removeParent(event){
	event.target.parentNode.remove();
}

addDeleteButtonToExistingList();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


