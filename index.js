const countryName = document.querySelector(".nameInput")
const countryFlag = document.querySelector(".flagInput")
const sortBtn = document.querySelector(".sort")
const searchBtn = document.querySelector(".search-button")
const searchValue = document.querySelector(".search")
const gettingNewCountryName = document.querySelector(".insertNewCountryName")
const gettingNewFlag = document.querySelector(".insertNewFlag")
const addingNewCountryNameToArray = document.querySelector(".adding")
const sortDisplay = document.querySelector(".order")
const searchDispay = document.querySelector(".search-results")
const errorMessage2 = document.querySelector(".error")
const successful = document.querySelector(".success")

const functionFlags = CountryFlags();

// get a reference to the template script tag
var templateSource = document.querySelector(".templateName").innerHTML;
// compile the template
var userTemplate = Handlebars.compile(templateSource);

function refresh() {
  functionFlags.display()
}
countryName.innerHTML = userTemplate({ countries: functionFlags.display() })


function sort() {
  functionFlags.sortAlphabetically()
  countryName.innerHTML = userTemplate({ countries: functionFlags.sortAlphabetically() })
}
sortBtn.addEventListener('click', sort)

function search() {
  let searchInput = searchValue.value
  functionFlags.searchCountry(searchInput)
  countryName.innerHTML = userTemplate({ countries: functionFlags.searchCountry(searchInput) })
}
searchValue.addEventListener('keyup', search)

function addingNew() {
  const newCountry = gettingNewCountryName.value
  const newFlag = gettingNewFlag.value
  const newCountryNameUpper = newCountry.charAt(0).toUpperCase() + newCountry.slice(1);

  if (newCountryNameUpper != "" && newFlag != "") {
    functionFlags.addingNewCountry(newCountryNameUpper, newFlag)
    errorMessage2.innerHTML = functionFlags.returnMessage()
    
  }
  else if (newCountryNameUpper == "") {
    errorMessage2.innerHTML = "Please enter a country name"
  }
  else if (newFlag == "") {
    errorMessage2.innerHTML = "Please insert a flag emoji"
  }

  setTimeout(function () {
    errorMessage2.innerHTML = "";
    successful.innerHTML = "";
  }, 3000);

  countryName.innerHTML = userTemplate({ countries: functionFlags.values().object })
}
addingNewCountryNameToArray.addEventListener('click', addingNew)
addingNewCountryNameToArray.onclick = function () {
  modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}