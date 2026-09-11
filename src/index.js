function updateTime() {
  let cityElement = document.querySelector(".city");

  if (cityElement) {
    let cityTimeZone = cityElement.dataset.timezone;
    let cityTime = moment().tz(cityTimeZone);

    let cityDateElement = cityElement.querySelector(".date");
    let cityTimeElement = cityElement.querySelector(".time");

    cityDateElement.innerHTML = cityTime.format("MMMM Do YYYY");
    cityTimeElement.innerHTML = cityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city" data-timezone="${cityTimeZone}">
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
  </div>`;

  updateTime();
}

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
