const countriesList = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const flagsList = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

const countryName = document.querySelector(".nameInput")
const countryFlag = document.querySelector(".flagInput")
const sortBtn = document.querySelector(".sort")
const searchBtn = document.querySelector(".search-button")
const searchValue = document.querySelector(".search")
const gettingNewCountryName = document.querySelector(".insertNewCountryName")
const addingNewCountryNameToArray = document.querySelector(".adding")
const errorMessage = document.querySelector(".messages")

// get a reference to the template script tag
var templateSource = document.querySelector(".templateName").innerHTML;

// compile the template
var userTemplate = Handlebars.compile(templateSource);

// get a reference to the template script tag
var templateSourceFlag = document.querySelector(".templateFlag").innerHTML;

// compile the template
var userTemplateFlag = Handlebars.compile(templateSourceFlag);

countryName.innerHTML = userTemplate({ countries: countriesList })
countryFlag.innerHTML = userTemplateFlag({ flags: flagsList })

function sortAlphabetically() {

  let sortedCountryNames = countriesList.sort()
  // let sortedCountryFlags = flagsList.sort()

  countryName.innerHTML = userTemplate({ countries: sortedCountryNames })
  // countryFlag.innerHTML = userTemplate({flags: sortedCountryFlags})

}
sortBtn.addEventListener('click', sortAlphabetically)

function addingNewCountry() {
  const newCountry = gettingNewCountryName.value

  // if(countriesList[newCountry] === undefined){

  //   if(newCountry.match("^[a-zA-Z]*$")){
  //     countriesList.push(newCountry)
  //   }
  //   else if(!newCountry.match("^[a-zA-Z]*$")){
  //     // errorMessage.innerHTML =  "Please enter a valid country name"
  //     setTimeout(function(){
  //       errorMessage.innerHTML = "Please enter a valid country name";
  //   }, 3000);
  //   }

  // }

  // console.log(countriesList);
  countryName.innerHTML = userTemplate({ countries: countriesList })
  // console.log(countryName.innerHTML);

}
addingNewCountryNameToArray.addEventListener('click', addingNewCountry)

// function searchCountry() {
//     let searchInput = searchValue.value
//     console.log(searchInput);

//     let searchArray = countriesList.find(searchInput)
//     countryName.innerHTML = userTemplate({ countries: searchArray })

// }

// searchBtn.addEventListener('click', searchCountry)

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