const countriesList = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const flagsList = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

let countryName = document.querySelector(".nameInput")
let countryFlag = document.querySelector(".flagInput")

// get a reference to the template script tag
var templateSource = document.querySelector(".templateName").innerHTML;

// compile the template
var userTemplate = Handlebars.compile(templateSource);

// get a reference to the template script tag
var templateSourceFlag = document.querySelector(".templateFlag").innerHTML;

// compile the template
var userTemplateFlag = Handlebars.compile(templateSourceFlag);

countryName.innerHTML = userTemplate({countries: countriesList})
countryFlag.innerHTML = userTemplateFlag({flags: flagsList})