function CountryFlags() {

  let countryData = [{ country: "Argentina", flag: "🇦🇷" },
  { country: "Brazil", flag: "🇧🇷" }, { country: "Chile", flag: "🇨🇱" }, { country: "Zambia", flag: "🇿🇲" },
  { country: "Uganda", flag: "🇺🇬" }, { country: "Malawi", flag: "🇲🇼" }, { country: "Rwanda", flag: "🇷🇼" },
  { country: "Ireland", flag: "🇮🇪" }, { country: "Switzerland", flag: "🇨🇭" }];


  let userMessage = ""

  if (localStorage['countryData']) {
    countryData = JSON.parse(localStorage.getItem('countryData'))
  }

  function display() {
    let filter = countryData.map(function (element) {
      return element.country + " " + element.flag

    });
    return filter
  
  }

  function sortAlphabetically() {

    let mappedCountry = countryData.map(function (element) {
      return element.country + " " + element.flag

    });
    let sortCountry = mappedCountry.sort()
    return sortCountry

  }

  function searchCountry(countryToSearch) {

    const searchFilter = countryData.filter(function (country) {
      return country.country.includes(countryToSearch)
    })

    return searchFilter

  }

  function countryExists(newCountry) {
    return countryData.some(function (element) {
      return element.country === newCountry;
    });
  }

  function flagExists(newFlag) {
    return countryData.some(function (element) {
      return element.flag === newFlag;
    });
  }

  function addingNewCountry(newCountry, newFlag) {
    const flagRegex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/
    
    if (countryExists(newCountry) == false && flagExists(newFlag) == false) {
      if (newCountry.match("^[a-zA-Z]*$")) {
        if (flagRegex.test(newFlag)) {
          countryData.push({ country: newCountry, flag: newFlag })
          localStorage.setItem('countryData', JSON.stringify(countryData))
          userMessage = "The country and flag entered has been entered successfully"

        }
        else if(!flagRegex.test(newFlag)) {
          userMessage = "Please enter a valid flag"
         
        }
      }
      else if(!newCountry.match("^[a-zA-Z]*$")){
        userMessage = "Please enter a valid country name"
      }
    }
    else if (countryExists(newCountry) == true || flagExists(newFlag) == true) {
      userMessage = "The country or flag entered already exists"
    }

    values().object

  }

  function values() {
    return {
      object: countryData,
    }
  }

  function returnMessage(){
    return userMessage
  }

  return {
    display,
    sortAlphabetically,
    searchCountry,
    values,
    addingNewCountry,
    countryExists,
    flagExists,
    returnMessage
  }

}