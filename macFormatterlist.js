
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
		} else {
			newString += macString[i];
		} 
	}
	console.log(newString);
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
	console.log(finalString);
	return finalString;
}




var button = document.querySelector("#formatButton")
button.addEventListener("click", function(){
	// Assign value entered into input box to variable 'inputValue' on button click
	var inputValue = document.querySelector("#iseFormatter").value
	var strippedMac = stripMac(inputValue);
	var checkedMac = charCheck(strippedMac)
	var iseMac = iseFormat(checkedMac);
	document.querySelector("#iseFormatted").textContent = iseMac;
	document.querySelector("#cmFormatted").textContent = checkedMac;
});

