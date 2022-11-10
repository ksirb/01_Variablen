"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hallo");
// console.log(firstName);

/***** 02 Deklaration + Wertweisung I *****/

// let firstName; //Deklaration (Definition)
// firstName = "Max"; //Wertzuweisung
// console.log(firstName); //Ausgabe

// let familyName = "Mütze"; //Deklaration + Wertzuweisung
// console.log(familyName); //Ausgabe
// console.log(firstName + " " + familyName);

/***** 03 Deklaration + Wertweisung II *****/

// let firstName, familyName;
// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Namen eingeben:");
// console.log(firstName + " " + familyName);

/* JS ist eine untypisierte Sprache! | untyped */

// let test;
// test = "Hi";
// test = 2;
// test = true;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test); // Ausgabe

/***** 03a Konstanten *****/

// const test = "Hallo";
// test = "hi"; //KEINE neu Zuweisung zur LZ möglich!!
// console.log("Inhalt: " + test);

/***** 04 Beispiel - Berechnung *****/

// //Deklaration
// let ageJohn, ageMark;
// let birthYearJohn, birthYearMark;

// //Wertzuweisung
// ageJohn = 25;
// ageMark = 30;

// let date = new Date();
// let year = date.getFullYear();

// //Berechnung
// birthYearJohn = year - ageJohn;
// birthYearMark = year - ageMark;


// //Ausgabe
// console.log(date);
// console.log("birthYearJohn: " + birthYearJohn);
// console.log("birthYearMark: " + birthYearMark);

/***** 05 Entscheidungsstrukturen | Control flow *****/

// //Deklaration + Assignment
const ageJohn = 25;
const ageMark = 30;

// //Deklaration
let isJohnOlder, isJohnEqual;

// //Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// //Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/***** IF *****/
//TINA --> There is no alternative!
//entwieder JA oder nix... alternativlos

//if(true) // always true
//if(false) // always false
// if(isJohnOlder) // proof
// if(ageJohn > ageMark) // proof_2
// {
//    console.log("John ist älter.");
// }

