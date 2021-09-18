/*
 * This project was created by Donovan Adrian and any
 * edits or changes must be confirmed as valid by Donovan
 * with written consent under any circumstance.
 */

function getRandomNumber(){
  let alphabet = "123456789";
  let selector = Math.floor((Math.random() * alphabet.length));
  return alphabet.charAt(selector);
}

function getRandomNumberHigh(){
  let alphabet = "56789";
  let selector = Math.floor((Math.random() * alphabet.length));
  return alphabet.charAt(selector);
}

function getRandomNumberLow(){
  let alphabet = "12345";
  let selector = Math.floor((Math.random() * alphabet.length));
  return alphabet.charAt(selector);
}

function getRandomLetter(){
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let selector = Math.floor((Math.random() * alphabet.length));
  return alphabet.charAt(selector);
}

function getRandomLetterUpper(){
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let selector = Math.floor((Math.random() * alphabet.length));
  return alphabet.charAt(selector);
}

function getRandomLetterLower(){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let selector = Math.floor((Math.random() * alphabet.length));
  return alphabet.charAt(selector);
}

function getRandomAlphaNum(){
  let alphabet = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let selector = Math.floor((Math.random() * alphabet.length));
  return alphabet.charAt(selector);
}

function getRandomBool(){
  let alphabet = "01";
  let selector = Math.floor((Math.random() * alphabet.length));
  return alphabet.charAt(selector);
}
