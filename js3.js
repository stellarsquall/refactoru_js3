// // TELLIE
var phoneNumber = prompt("Please enter your phone number including dashes.");
var phoneNumberPattern = /^(\()?\d{3}(\))?(.|\s)?\d{3}(.|\s)\d{4}$/; 

while (!phoneNumberPattern.test(phoneNumber)) {

phoneNumber = prompt("Please enter a valid 10 digit number.  Don't forget the dashes.");

}

alert("Your phone number is valid.");



BIRTHDATE
var birthDate = prompt("Please enter your birthdate including slashes in the format MM/DD/YY.");
var birthDatePattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{2}$/; 

while (!birthDatePattern.test(birthDate)) {

birthDate = prompt("Please enter your birthdate including slashes in the format MM/DD/YY.");

}

alert("Your birthdate is valid.");

//POSTAL CODE

var postalCode = prompt("Please enter your postal code.");
var postalCodePattern = /^\d{5}([\-]?\d{4})?$/; 

while (!postalCodePattern.test(postalCode)) {

postalCode = prompt("Please enter your postal code");

}

alert("Your postal code is valid.");


//STATE 

var stateCode = prompt("Please enter your state abbreviation in the format XX.");
//var stateCodePattern = /^\d{5}([\-]?\d{4})?$/; 

while (!(stateCode.length === 2 && stateCode === stateCode.toUpperCase())) {

stateCode = prompt("Please enter your state abbreviation in the format XX.");

}

alert("Your state abbreviation is valid.");


// Marriage status

var marriageCode = prompt("Please enter your marital status as yes or no.");

while (!((marriageCode.toLowerCase() === "yes") || (marriageCode.toLowerCase() === "no"))) {

marriageCode = prompt("Please enter your marital status as yes or no")
}

alert("Your marriage status is valid.");