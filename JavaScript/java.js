
function updateTime (){
   let tokyoElement = document.querySelector("#tokyo");
   let tokyoDateElement = tokyoElement.querySelector(".date");
   let tokyoTimeElement = tokyoElement.querySelector(".time");
   let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");
  romeTimeElement.innerHTML = romeTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

}
updateTime();
setInterval(updateTime, 1000);

function updateCity (event){
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")} </div>
        </div>
        <div class="time"> ${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")} </small></div>
    </div>
    <a href="/" class="homepage">All cities</a>
   
  `;

}


let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
