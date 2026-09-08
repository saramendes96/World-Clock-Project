let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector (".date");
let losAngelesTimeElement = losAngelesElement.querySelector (".time");
let losAngelesTime = moment().tz("America/Los Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format ("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format ("h:mm:ss [<small>]A [<small>]");


let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector (".date");
let losAngelesTimeElement = losAngelesElement.querySelector (".time");
let losAngelesTime = moment().tz("America/Los Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format ("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format ("h:mm:ss [<small>]A [<small>]");
