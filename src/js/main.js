/*
 * This project was created by Donovan Adrian and any
 * edits or changes must be confirmed as valid by Donovan
 * with written consent under any circumstance.
 */

let basicModeDiv;
let dropDown;
let advancedModeDiv;
let baseURLInp;
let suffixURLInp;
let randomSuffixTxt;
let specificSuffixTxt;
let showHideSearchCriteria;
let searchCriteriaDiv;
let searchCriteriaInp;
let randomSearchTxt;
let dynamicSearchTxt;
let randCountInp;
let activateRandomizer;

let urlString = "";
let urlCountInt = 1;
let basicModeBool = true;
let randomSuffixBool = false;
let randomSearchBool = false;
let debugBool = true;



window.onload = function initialize() {
  basicModeDiv = document.getElementById('basicModeDiv');
  dropDown = document.getElementById("websiteDropdown");
  advancedModeDiv = document.getElementById("advancedModeDiv");
  baseURLInp = document.getElementById("baseURLInp");
  suffixURLInp = document.getElementById("suffixURLInp");
  randomSuffixTxt = document.getElementById("randomSuffixTxt");
  specificSuffixTxt = document.getElementById("specificSuffixTxt");
  showHideSearchCriteria = document.getElementById('showHideSearchCriteria');
  searchCriteriaDiv = document.getElementById('searchCriteriaDiv');
  searchCriteriaInp = document.getElementById("searchCriteriaInp");
  randomSearchTxt = document.getElementById("randomSearchTxt");
  dynamicSearchTxt = document.getElementById("dynamicSearchTxt");
  randCountInp = document.getElementById("randCountInp");
  activateRandomizer = document.getElementById("activateRandomizer");

  activateRandomizer.onclick = function() {
    pageRandomizer();
  }

  showHideSearchCriteria.onclick = function() {
    if (searchCriteriaDiv.style.display == "none") {
      searchCriteriaDiv.style.display = "block";
    } else {
      searchCriteriaDiv.style.display = "none";
    }
  }
}

function pageRandomizer() {

  if (basicModeBool) {
    switch (dropDown.value) {
      case "you":
        window.open("https://www.youtube.com/watch?v=" + fetchRandom8(11), '_blank').focus();
        break;
      case "img":
        window.open("https://imgur.com/gallery/" + fetchRandom8(7), '_blank').focus();
        break;
      case "wiki":
        window.open("https://en.wikipedia.org/wiki/" + fetchRandom8(getRandomNumberHigh()), '_blank').focus();
        break;
      default:
        if (debugBool)
          console.log("Is this your card? " + dropDown.value);
        break;
    }
  } else {
    checkUserInput();
    if (searchCriteriaDiv.style.display == "none" || searchCriteriaInp.value == "") {
      if (randomSuffixBool) {
        urlString = baseURLInp.value + fetchDynamic(suffixURLInp.value);
      } else {
        urlString = baseURLInp.value + suffixURLInp.value;
      }
      console.log(urlCountInt + ": " + urlString);
      window.open(urlString, '_blank').focus();
      urlCountInt++;
    } else {
      alert("Sorry bruh, this doesn't work yet!");
    }
  }
}

function fetchDynamic(userInput) {
  let string = "";

  for (let i = 0; i < userInput.length; i++) {

    if (userInput.charAt(i) == "#") {
      string += getRandomNumber();
    } else if (userInput.charAt(i) == "X") {
      string += getRandomLetterUpper();
    } else if (userInput.charAt(i) == "x") {
      string += getRandomLetterLower();
    } else if (userInput.charAt(i) == "8") {
      string += getRandomAlphaNum();
    } else {
      if (debugBool)
        console.log("HECK");
    }
  }

  return string;
}

function fetchRandom8(num) {
  let string = "";

  for (let i = 0; i < num; i++) {
    string += getRandomAlphaNum();
  }

  return string;
}

function checkUserInput() {//ToDo
  if (debugBool)
    console.log("Checking User Input...");

  //check all of the following
  baseURLInp.value;
  suffixURLInp.value;
  searchCriteriaInp.value;
  randCountInp.value;
}

/*
*
* DOM Functionality
*
 */

function basicAdvancedMode(mode) {
  switch (mode) {
    case 'basic':
      basicModeBool = true;
      basicModeDiv.style.display = "block";
      advancedModeDiv.style.display = "none";
      break;
    case 'advanced':
      basicModeBool = false;
      basicModeDiv.style.display = "none";
      advancedModeDiv.style.display = "block";
      break;
    default:
      if (debugBool)
        console.log("Is this your card? " + mode);
      break;
  }
}

function swapRadio(btn) {
  switch (btn) {
    case 'randomSuffRad':
      randomSuffixBool = true;
      showHideTxt(randomSuffixTxt, "block");
      showHideTxt(specificSuffixTxt, "none");
      break;
    case 'specificSuffRad':
      randomSuffixBool = false;
      showHideTxt(randomSuffixTxt, "none");
      showHideTxt(specificSuffixTxt, "block");
      break;
    case 'dynamicTxtRad':
      randomSearchBool = true;
      showHideTxt(randomSearchTxt, "block");
      showHideTxt(dynamicSearchTxt, "none");
      break;
    case 'specificTxtRad':
      randomSearchBool = false;
      showHideTxt(randomSearchTxt, "none");
      showHideTxt(dynamicSearchTxt, "block");
      break;
    default:
      if (debugBool)
        console.log("Is this your card? " + btn);
      break;
  }
}

function showHideTxt(txtElement, state) {
  try {
    txtElement.style.display = state;
  } catch (err) {
    if (debugBool)
      console.log("Something went wrong show/hide-ing the text!");
  }
}

/*
*
* Nothing else down here!
*
 */
