// http://api.weatherapi.com/v1/forecast.json?key=20b5423eb47a45d185984307232402&q=cairo&days=3


const search = document.querySelector("#search_input")

search.addEventListener("input", function () {
    if (this.value.length > 2) {
        fetchAPI(this.value)
    }

})

async function fetchAPI(query) {
    try {
        const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=20b5423eb47a45d185984307232402&q=${query}&days=3`)
        const data = await res.json()
        displayCurrent(data.current, data.location.name);
        displayForecast(data.forecast.forecastday);
    } catch (error) {
        console.log(error);

    }

}

function displayCurrent(current, city) {
    const date = new Date(current.last_updated)
    const monthName = date.toLocaleString("en", { month: "long" })
    const dayNumber = date.toLocaleString("en", { day: "numeric" })
    const dayName = date.toLocaleString("en", { weekday: "long" })

    const cartona = `
              <div class="card">
            <div class="card-header p-0 px-2">
              <div class="d-flex justify-content-between align-items-center pt-1">
                <p id="current_day">${dayName}</p>
                <p id="current_Date">${dayNumber} ${monthName}</p>
              </div>
            </div>
            <div class="card-body pb-4">
              <span id="city">${city}</span>
              <div class="d-flex mb-3">
                <h2 class="text-white me-5" id="current_max_temp">
                  ${current.temp_c}<sup>o</sup>C
                </h2>
                <img src=${current.condition.icon} class="img-fluid" alt="" srcset="" id="status_img" />
              </div>
              <span class="custom" id="current_status">${current.condition.text} </span>
              <div class="d-flex my-3">
                <div class="flex">
                  <img src="./images/icon-umberella.png" class="me-1" alt="" srcset="" id="humidity_icon" />
                  <span id="humidity">${current.humidity
        }%</span>
                </div>
                <div class="flex mx-3">
                  <img src="./images/icon-wind.png" class="me-1" alt="" srcset="" id="wind_kph_icon" />
                  <span id="wind_kph">${current.wind_kph}km/h</span>
                </div>
                <div class="flex">
                  <img id="wind_dir_icon" src="./images/icon-compass.png" class="me-1" alt="" srcset="" />
                  <span id="wind_dir">${current.wind_dir}</span>
                </div>
              </div>
            </div>
          </div>
    
    
    `
    document.querySelector("#currentCard").innerHTML = cartona
}



function displayForecast(forecast) {
    let cartona = ``
    for (let i = 1; i < forecast.length; i++) {
        const date = new Date(forecast[i].date)
        const dayName = date.toLocaleString("en", { weekday: "long" })

        cartona += `
               <div class="col-md-6">
              <div class= "card">
                <div class="card-header p-0 px-2 pt-1">
                  <div class="d-flex justify-content-center">
                    <p class="afterNextDay">${dayName}</p>
                  </div>
                </div>
                <div class="card-body py-5">
                  <div class="d-flex flex-column align-items-center">
                    <img id="afterNextDay_icon" src=${forecast[i].day.condition.icon} class="img-fluid mb-3" alt="" srcset="" />
                    <h4 class="text-white">
                     ${forecast[i].day.maxtemp_c}<sup>o</sup>C
                    </h4>
                    <span class="text-white">
                    ${forecast[i].day.mintemp_c}<sup>o</sup></span>
                    <span class="custom mt-4">${forecast[i].day.condition.text}</span>
                  </div>
                </div>
              </div>
            </div>
        
        
        `

    }

    document.querySelector("#foreCards").innerHTML = cartona
}
fetchAPI("cairo")

navigator.geolocation.getCurrentPosition((success, error) => {
    if (error) {
        console.log(error);  
    }
    else {
        console.log(success);
        
        const lat = success.coords.latitude;
        const long = success.coords.longitude
        fetchAPI(`${lat},${long}`)

    }
})

