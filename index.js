let countryData = [{ country: "Argentina", flag: "🇦🇷" },
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
const messageSuccess = document.querySelector(".successMessages")
const sortDisplay = document.querySelector(".order")
const searchDispay = document.querySelector(".search-results")
const errorMessage2 = document.querySelector(".error")
const successful = document.querySelector(".success")

if (localStorage['countryData']) {
  countryData = JSON.parse(localStorage.getItem('countryData'))
}

// get a reference to the template script tag
var templateSource = document.querySelector(".templateName").innerHTML;
// compile the template
var userTemplate = Handlebars.compile(templateSource);


function display() {
  let filter = countryData.map(function (element) {
    return element.country + " " + element.flag

  });
  countryName.innerHTML = userTemplate({ countries: filter })
}
display()

function sortAlphabetically() {

  let mappedCountry = countryData.map(function (element) {
    return element.country + " " + element.flag

  });
  let sortCountry = mappedCountry.sort()
  countryName.innerHTML = userTemplate({ countries: sortCountry })
}
sortBtn.addEventListener('click', sortAlphabetically)

function addingNewCountry() {
  const newCountry = gettingNewCountryName.value
  const newFlag = gettingNewFlag.value
  const newCountryNameUpper = newCountry.charAt(0).toUpperCase() + newCountry.slice(1);
  const flagRegex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;

  function countryExists(newCountryNameUpper) {
    return countryData.some(function (element) {
      return element.country === newCountryNameUpper;
    });
  }

  function flagExists(newFlag) {
    return countryData.some(function (element) {
      return element.flag === newFlag;
    });
  }

  if (newCountryNameUpper && newFlag != "") {
    if (countryExists(newCountryNameUpper) == false && flagExists(newFlag) == false) {
      if (newCountry.match("^[a-zA-Z]*$")) {
        if (newFlag.match(flagRegex)) {
          countryData.push({ country: newCountryNameUpper, flag: newFlag })
          successful.innerHTML = "The country and flag entered has been entered successfully"
          messageSuccess.innerHTML = "The country and flag entered has been entered successfully"
          localStorage.setItem('countryData', JSON.stringify(countryData))

        }
        else {
          errorMessage.innerHTML = "Please enter a valid flag"
          errorMessage2.innerHTML = "Please enter a valid flag"
        }
      }
      else {
        errorMessage.innerHTML = "Please enter a valid country name"
        errorMessage2.innerHTML = "Please enter a valid country name"
      }
    }
    else if (countryExists(newCountryNameUpper) == true || flagExists(newFlag) == true) {
      errorMessage.innerHTML = "This country or flag already exists"
      errorMessage2.innerHTML = "The country or flag entered already exists"
    }
  }
  else if (newCountryNameUpper == "") {
    errorMessage.innerHTML = "Please enter a country name"
    errorMessage2.innerHTML = "Please enter a country name"
  }
  else if (newFlag == "") {
    errorMessage.innerHTML = "Please insert a country flag"
    errorMessage2.innerHTML = "Please insert a country flag"
  }

  setTimeout(function () {
    errorMessage.innerHTML = "";
    errorMessage2.innerHTML = "";
    successful.innerHTML = "";
    messageSuccess.innerHTML = "";
  }, 3000);

  display()

  return {
    countryExists,
    flagExists
  }

}
addingNewCountryNameToArray.addEventListener('click', addingNewCountry)
addingNewCountryNameToArray.onclick = function () {
  modal.style.display = "none";
}

function searchCountry() {
  let searchInput = searchValue.value

  const searchFilter = countryData.filter(function (country) {
    return country.country.includes(searchInput)
  })
  countryName.innerHTML = userTemplate({ countries: searchFilter })

}
searchValue.addEventListener('keyup', searchCountry)

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