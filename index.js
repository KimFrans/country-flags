// const countriesList = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

// const flagsList = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

const countryData = [{ country: "Argentina", flag: "🇦🇷" },
{ country: "Brazil", flag: "🇧🇷" }, { country: "Chile", flag: "🇨🇱" }, { country: "Zambia", flag: "🇿🇲" },
{ country: "Uganda", flag: "🇺🇬" }, { country: "Malawi", flag: "🇲🇼" }, { country: "Rwanda", flag: "🇷🇼" },
{ country: "Ireland", flag: "🇮🇪" }, { country: "Switzerland", flag: "🇨🇭" }];

const countryName = document.querySelector(".nameInput")
const countryFlag = document.querySelector(".flagInput")
const sortBtn = document.querySelector(".sort")
const searchBtn = document.querySelector(".search-button")
const searchValue = document.querySelector(".search")
const gettingNewCountryName = document.querySelector(".insertNewCountryName")
const gettingNewFlag = document.querySelector(".insertNewFlag")
const addingNewCountryNameToArray = document.querySelector(".adding")
const errorMessage = document.querySelector(".messages")
const sortDisplay = document.querySelector(".order")
// const results = document.querySelector(".results")

// get a reference to the template script tag
var templateSource = document.querySelector(".templateName").innerHTML;

// compile the template
var userTemplate = Handlebars.compile(templateSource);

// get a reference to the template script tag
var templateSourceFlag = document.querySelector(".templateFlag").innerHTML;

// compile the template
var userTemplateFlag = Handlebars.compile(templateSourceFlag);

// countryName.innerHTML = userTemplate({ countries: countriesList })
const stringData = JSON.stringify(countryData)
// countryName.innerHTML = stringData
// countryName.innerHTML = userTemplate({ countries: stringData })
// console.log(JSON.stringify(countryData));
// countryFlag.innerHTML = userTemplateFlag({ flags: flagsList })

function display() {
  let filter = countryData.map(function (element) {
    return element.country

  });
  countryName.innerHTML = userTemplate({ countries: filter })

  let filterFlag = countryData.map(function (element) {
    return element.flag

  });
  countryFlag.innerHTML = userTemplateFlag({ flags: filterFlag })

  console.log(filter)
  console.log(filterFlag)
  // return filter && filterFlag
}
display()

function sortAlphabetically() {

  let mappedCountry = countryData.map(function (element) {
    return element.country + " " + element.flag

  });
  let sortCountry = mappedCountry.sort()
  sortDisplay.innerHTML = userTemplate({ countries: sortCountry })
  console.log(sortCountry);


}
sortBtn.addEventListener('click', sortAlphabetically)

function addingNewCountry() {
  const newCountry = gettingNewCountryName.value
  const newFlag = gettingNewFlag.value

  console.log(newCountry);
  console.log(newFlag);

  // if(countryData[newCountry] === undefined){

    // if(newCountry.match("^[a-zA-Z]*$")){
      countryData.push({ country: newCountry, flag: newFlag})
    // }
    console.log(countryData);
    // else if(!newCountry.match("^[a-zA-Z]*$")){
    //   // errorMessage.innerHTML =  "Please enter a valid country name"
    //   setTimeout(function(){
    //     errorMessage.innerHTML = "Please enter a valid country name";
    // }, 3000);
    // }

  // }


  display()

}
addingNewCountryNameToArray.addEventListener('click', addingNewCountry)

function searchCountry() {
  let searchInput = searchValue.value

  countryData.forEach(object =>{
    if(searchInput === object.country){
        console.log(object.country + " " + object.flag);
        let result = object.country + " " + object.flag
        countryName.innerHTML = userTemplate({ countries: result})
    }
});
    // countryName.innerHTML = userTemplate({ countries: result })


}

searchBtn.addEventListener('click', searchCountry)

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