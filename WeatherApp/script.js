const apiUrl = ``;

// fetching data using XMLHttpRequest 


/* // Create a new XMLHttpRequest object

var xhr = new XMLHttpRequest();

xhr.open("GET", 'http://api.weatherapi.com/v1/current.json?key=d671418a2db94507944113355242202&q=London&aqi=yes', true);


xhr.onreadystatechange = function () {

    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonResponse = JSON.parse(xhr.responseText);
        console.log(jsonResponse);
    } if (xhr.readyState === 4 && xhr.status !== 200) {
        console.log('Error Fetching Data', undefined);
    }
};

// Send the request
xhr.send(); */


// for help

/*  domElement.innerHTML = raectElement.children;
        domElement.setAttribute('href',raectElement.props.href);
        domElement.setAttribute('target',raectElement.props.target);
        container.appendChild(domElement); */


const buttom = document.querySelector('.search-btn')
const input = document.querySelector('.search-bar')
const bgImage = document.querySelector('.weather-image')
const weatherText = document.querySelector('.weather-info-text')
const cityName = document.querySelector('.city-name')
const temp = document.querySelector('.temp')
const getLocation = document.querySelector('.get-location-btn')



async function getData(city) {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=d671418a2db94507944113355242202&q=${city}&aqi=yes`);
  const data = await response.json();
  return data

}


buttom.addEventListener("click", async () => {



  const value = input.value;

  const result = await getData(value)

  console.log(result);
  cityName.textContent = `${result.location.name}, ${result.location.region}, ${result.location.country}`

  temp.classList.add("show")
  temp.textContent = `${result.current.temp_c} °C`

  weatherText.textContent = `${result.current.condition.text}`

  bgImage.classList.add("show")

  bgImage.setAttribute('src', result.current.condition.icon);
})


async function getData(lat, long) {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=d671418a2db94507944113355242202&q=${lat},${long}&aqi=yes`);
  const data = await response.json();
  return data

}

async function getTheLocation(position) {
  const result = await getData(position.coords.latitude, position.coords.longitude)
  console.log(result);

  cityName.textContent = `${result.location.name}, ${result.location.region}, ${result.location.country}`

  temp.classList.add("show")
  temp.textContent = `${result.current.temp_c} °C`

  weatherText.textContent = `${result.current.condition.text}`

  bgImage.classList.add("show")

  bgImage.setAttribute('src', result.current.condition.icon);
}


getLocation.addEventListener('click',  async () => {
   navigator.geolocation.getCurrentPosition(getTheLocation)

  

})




