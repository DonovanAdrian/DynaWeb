/*
 * This project was created by Donovan Adrian and any
 * edits or changes must be confirmed as valid by Donovan
 * with written consent under any circumstance.
 */

let basicModeDiv;
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



window.onload = function initialize() {
  basicModeDiv = document.getElementById('basicModeDiv');
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
    fetchRandomPage();
  }

  showHideSearchCriteria.onclick = function() {
    if (searchCriteriaDiv.style.display == "none") {
      searchCriteriaDiv.style.display = "block";
    } else {
      searchCriteriaDiv.style.display = "none";
    }
  }
}

function fetchRandomPage() {
  alert("Sorry bruh, this doesn't work yet!");
  //basic or advanced check
  //basic
  //youtube formula: https://www.youtube.com/watch?v=88888888888 (11 numbers or letters)
  //imgur formula: https://imgur.com/gallery/8888888 (7 numbers OR letters)
  //wikipedia formula: https://en.wikipedia.org/wiki/88888888888888888888 (any combo of numbers or letters)
  //advanced
  //check all user inputs...
  //if searchCriteriaDiv is hidden or if "how many"/"search criteria" fields are empty...
  //https://[BaseURL]/[Suffix]/
}

/*
*
* DOM Functionality
*
 */

function basicAdvancedMode(mode) {
  console.log(mode);
  switch (mode) {
    case 'basic':
      basicModeDiv.style.display = "block";
      advancedModeDiv.style.display = "none";
      break;
    case 'advanced':
      basicModeDiv.style.display = "none";
      advancedModeDiv.style.display = "block";
      break;
    default:
      console.log("Is this your card? " + mode);
      break;
  }
}

function swapRadio(btn) {
  switch (btn) {
    case 'randomSuffRad':
      showHideTxt(randomSuffixTxt, "block");
      showHideTxt(specificSuffixTxt, "none");
      break;
    case 'specificSuffRad':
      showHideTxt(randomSuffixTxt, "none");
      showHideTxt(specificSuffixTxt, "block");
      break;
    case 'dynamicTxtRad':
      showHideTxt(randomSearchTxt, "block");
      showHideTxt(dynamicSearchTxt, "none");
      break;
    case 'specificTxtRad':
      showHideTxt(randomSearchTxt, "none");
      showHideTxt(dynamicSearchTxt, "block");
      break;
    default:
      console.log("Is this your card? " + btn);
      break;
  }
}

function showHideTxt(txtElement, state) {
  try {
    txtElement.style.display = state;
  } catch (err) {
    console.log("Something went wrong show/hide-ing the text!");
  }
}

/*
*
* Nothing else down here!
*
 */
