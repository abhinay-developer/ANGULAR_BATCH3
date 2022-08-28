/**
 *   conditional Statements
 *   if
 *   if else
 *   if else if else
 *   nested if
 *   ladder if
 *
 *
 */
/**
 * if exp
 */
var age = 25;
if (age > 18) {
    console.log("You are eligible");
}
/**
 *   if else
 */
var score = 50;
if (score >= 50 && score <= 99) {
    console.log("half century");
}
else {
    console.log("Invalid");
}
/**
 * if else if else
 */
var procesessor = "I7";
if (procesessor == "I7") {
    console.log("Best");
}
else if (procesessor == "I5") {
    console.log("Better");
}
else if (procesessor == "I3") {
    console.log("Good");
}
else {
    console.log("Better luck Next time");
}
/***
 *  ladder if
 */
var brands = ["ONEPLUS", "SAMSUNG", "NOKIA", "SONY"];
/*
 *  Oneplus=>N01.  SAM-2 NOK-3  SONY-4
 */
brands.forEach(function (element) {
    if (element == "ONEPLUS") {
        console.log("NO.1");
    }
    if (element == "SAMSUNG") {
        console.log("NO.2");
    }
    if (element == "NOKIA1") {
        console.log("NO.3");
    }
    if (element == "SONY1") {
        console.log("NO.4");
    }
});
