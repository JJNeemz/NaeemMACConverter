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
	return finalString.toUpperCase();
}




var button = document.querySelector("#formatButton")
button.addEventListener("click", function(){
	// Assign value entered into input box to variable 'inputValue' on button click
	var inputValue = document.querySelector("#iseFormatter").value
	var strippedMac = stripMac(inputValue);
	var iseMac = iseFormat(strippedMac);
	document.querySelector("#iseFormatted").textContent = iseMac;
	document.querySelector("#cmFormatted").textContent = strippedMac.toUpperCase();
});

