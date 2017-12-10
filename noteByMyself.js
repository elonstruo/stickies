	// window.onload = init;
	// function init() {

	// 	var text = document.getElementById('input_text').value;
	// 	var button = document.getElementById('input_button');
	// 	var clearButton = document.getElementById('clearAll_button');

	// 	button.onclick = addDOM;
	// 	clearButton.onclick = clearAll;
		
	// }

	// function getstickiesArry() {
	// 	var stickiesArry = localStorage.getItem("stickiesArry");
	// 	if (!stickiesArry) {
	// 		stickiesArry = [];
	// 		localStorage.setItem("stickiesArry", JSON.stringify(stickiesArry));
	// 	} else {
	// 		stickiesArry = JSON.parse(stickiesArry);
	// 	}

	// 	return stickiesArry;
	// }


	// function addDOM() {
	// 	var text = document.getElementById('input_text').value;
	// 	var stickiesArry = getstickiesArry();
	// 	var stickies = document.getElementById('stickies');
	// 	for (var i = 0; i < stickiesArry.length; i++) {
	// 		var key = stickiesArry[i];
	// 		var value = localStorage[key];

	// 		stickiesArry.push(key);
	// 		var li = document.createElement("li");
	// 		li.setAttribute("id", key);
	// 		li.innerHTML = key;
	// 		stickies.appendChild(li);
	// 	}
	// }

	// function clearAll() {
	// 	localStorage.clear();
	// }

window.onload = init;

var add = document.getElementById("input_button");
var stickies = document.getElementById("stickies");
var sticky = document.getElementsByTagName('li');
var clearAllButton = document.getElementById("clearAll_button");

function init() {

	// for (var i = 0; i < localStorage.length; i++) {
	// 	var index = localStorage.key(i); 
	// 	var value = localStorage[index];
	// 	// console.log("index___"+index);
	// 	// console.log("value___"+value);
	// 	// console.log("localStorage.key___"+localStorage.key(0));
	// 	// console.log("localStorage.[0]___"+localStorage[0]);
	// 	// console.log("localStorage.[localStorage.key(0)]___"+localStorage[localStorage.key(0)]);

	// 	addDOM(value);
	// }

	var stickiesArry = getstickiesArry()

	for (var i = 0; i < stickiesArry.length; i++) {
		var index = stickiesArry[i];
		var value = localStorage[index];

		addDOM(index, value);
	}

	add.onclick = function () {
	var text = document.getElementById("input_text").value;	
		if (text == "") {
			alert("please input text")
		} else {
			creatDOM();
		}
	};

	

	clearAllButton.onclick = clearAll;
}

function addDOM(key, value) {
	var li = document.createElement("li");
	li.setAttribute("id", key);
	li.innerHTML = value;
	stickies.appendChild(li);
	li.onclick = clearOne;
}
function creatDOM() {
	var stickiesArry = getstickiesArry();
	var text = document.getElementById("input_text").value;
	var current = new Date();
	var key = current.getTime();
	localStorage.setItem(key, text);
	stickiesArry.push(key);
	console.log(stickiesArry);
	localStorage.setItem("stickiesArry", JSON.stringify(stickiesArry));


	addDOM(key, text);
	// console.log(text);
}
function clearAll() {
	localStorage.clear();
}
function clearOne(e) {
	var key = e.target.id;
	// if (e.target.tagName.toLowerCase() == "li") {
	// 	key = e.target.parentNode.id;
	// }
	localStorage.removeItem(key);
	var stickiesArry = getstickiesArry();
	if (stickiesArry) {
		for (var i = 0; i < stickiesArry.length; i++) {
			if (key == stickiesArry[i].id) {
				stickiesArry.splice(i, 1);
			}
		}
		localStorage.setItem("stickiesArry", JSON.stringify(stickiesArry))
		removeDOM(key);
	}
}
function getstickiesArry() {
	var stickiesArry = localStorage.getItem("stickiesArry");
	if (!stickiesArry) {
		stickiesArry = [];
		localStorage.setItem("stickiesArry", JSON.stringify(stickiesArry));
	} else {
		stickiesArry = JSON.parse(stickiesArry);
	}
	return stickiesArry;
}
function removeDOM(key) {
	var sticky = document.getElementById(key);
	stickies.removeChild(sticky);
}