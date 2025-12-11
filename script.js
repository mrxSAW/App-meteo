let body = document.body;
let sunicon;
function changerbakround() {
    body.classList.toggle('mode_black');
}


function search() {
  let input = document.getElementById('recherch');
  let city = input.value.trim().toUpperCase();
  if (!city) return alert("Entrez une ville.");

  fetchByCity(city);  
}

const API_KEY = "0962d6568950d8abd49bf2891e647fac";
let CITY_NAME = "RABAT";


function fetchByCity(cityName) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric&lang=fr`)
    .then(r => r.json())
    .then(data => {
         if (data.cod === "404") {
        alert("Ville non trouvée !");
        return; // arrêter ici
      }

      console.log(data)
      let C = document.getElementById('C');
      C.innerHTML = data.city.name;

      let T = document.getElementById('T');
      T.innerHTML = Math.round(data.list[0].main.temp) + "°C";
      
      let V = document.getElementById('V');
      V.innerHTML = (data.list[0].wind.speed * 3.6).toFixed(1) + " km/h";
       

      let S = document.getElementById('S');
      S.innerHTML = data.list[0].weather[0].main;
      //affichage de sun 
       const main = data.list[0].weather[0].main; // ex: "Rain", "Clear", "Clouds"
const img = document.getElementById('sun');

if (img) {
  if (main === "Rain") {
    img.src = "icon/rain.svg";
    img.alt = "Pluie";
  } else if (main === "Clear") {
    img.src = "icon/sun.svg";
    img.alt = "Ciel dégagé";
  } else if (main === "Clouds") {
    img.src = "icon/cloudy.svg";
    img.alt = "Nuageux";
  } else {
    img.src = "icon/unknown.svg"; 
    img.alt = main;
  }
}
           //image WIND ET TEMP
           
const temp = Math.round(data.list[0].main.temp);
const tempImg = document.getElementById('temper');

// Choisir l’image selon la température
if(tempImg){
if (temp <= 10) {
    tempImg.src = "icon/cold.svg";
} 
else if (temp <= 25) {
    tempImg.src = "icon/happy.svg";
} 
else {
    tempImg.src = "icon/hot.svg";
}
}

// ==== WIND ICON ====
const windKmh = data.list[0].wind.speed * 3.6;
const windImg = document.getElementById('wind');

// Choisir l’image selon la vitesse du vent
if(windImg){
if (windKmh < 20) {
    windImg.src = "icon/calm.svg";
} 
else {
    windImg.src = "icon/storm.svg";
}
}


        //fin de l'affichage de l'image 
    })
    .catch(err => console.error(err));
}

fetchByCity(CITY_NAME);

  

  
