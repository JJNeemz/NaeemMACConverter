
var legalChar = ['A','B','C','D','E','F', '1','2','3','4','5','6','7','8','9','0']

/* Future Improvements:
	1. Error handling to replace O with 0
	2. Error checking to verify all characters are legal
	3. Ensure MAC address is 12 characters in lenght
*/

console.log("hello world")




// Function that takes any set of characters and strips special
// characters from it.
function stripMac(macString){
	var newString = "";
	for(var i = 0; i <  macString.length; i++){
		if(macString[i] === ":" || macString[i] === '.' 
		   || macString[i] === ' ' || macString[i] === '-'){
			continue;
		} else if(macString[i] === "o" || macString[i] === "O"){
			newString += "0";
		} else {
			newString += macString[i];
		} 
	}
	return newString;
};


// Function that checks stripped MAC address for illegal characters
// Secondary purpose of function is to capitalize entered MAC address
function charCheck(cleanString){
	cleanString = cleanString.toUpperCase();
	for(var i = 0; i < cleanString.length; i++){
		if(legalChar.indexOf(cleanString[i]) === -1){
			alert("Error: The MAC Address entered contains invalid characters.");
			cleanString = '';
			break;
		} else {
			continue;
		}
	} if(cleanString.length > 12){
		alert("Error: The MAC address entered contains too many characters");
		cleanString = ''
	} else if(cleanString.length < 12){
		alert("Error: The MAC address entered does not contain enough characters");
		cleanString = ''
	} else{
		return cleanString;
	}
}


function iseFormat(cleanString){
	count = 0;
	finalString = ""
	for(var i = 0; i < cleanString.length; i++){
		count += 1;
		if(count % 2 === 1){
			finalString += cleanString[i];
		} else if(count % 2 === 0 && count < 12){
			finalString += cleanString[i] + ':';
		} else {
			finalString += cleanString[i];
		}
	}
	return finalString;
}


// Function creates a new "p" element for each item in array
function ISEarrayToString(array){
	document.querySelector("#iseContent").innerHTML = "";
	array.forEach(function(item){
		var newElement = document.createElement("p");
		newElement.innerHTML = item;
		newElement.setAttribute("class", "macList");
		// Add event listener
		newElement.addEventListener("click", function(){
			this.style.color = "red";
		});
		document.querySelector("#iseContent").appendChild(newElement);
	});
}

function CMarrayToString(array){
	document.querySelector("#cmContent").innerHTML = ""
	array.forEach(function(item){
		var newElement = document.createElement("p");
		newElement.innerHTML = item;
		newElement.setAttribute("class", "macList");
		document.querySelector("#cmContent").appendChild(newElement);
	});
}

// THE FOLLOWING CODE CONVERTS THE MAC ADDRESS AFTER THE FORMAT BUTTON IS CLICKED
var button = document.querySelector("#formatButton")
button.addEventListener("click", function(){
	// Assign value entered into input box to variable 'inputValue' on button click
	var inputValue = document.querySelector("#iseFormatter").value
	iseArray = [];
	cmArray = [];
	// Create array from the input text field by splitting the input after each carriage return
	var inputValueList = inputValue.split("\n")
	inputValueList.forEach(function(listItem){
		var strippedMac = stripMac(listItem);
		var checkedMac = charCheck(strippedMac);
		var iseMac = iseFormat(checkedMac);
		iseArray.push(iseMac);
		cmArray.push(checkedMac);
	});
	ISEarrayToString(iseArray);
	CMarrayToString(cmArray);
});
// END

