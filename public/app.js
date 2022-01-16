var input_distanceEarthKm = document.getElementById('distanceEarthKm')
var input_launchElapsedTime = document.getElementById('launchElapsedTime')
var input_distanceL2Km = document.getElementById('distanceL2Km')
var input_percentageCompleted = document.getElementById('percentageCompleted')
var input_speedKmS = document.getElementById('speedKmS')
var img_deploymentImgURL = document.getElementById('deploymentImgURL')

async function app() {
  var response = await fetch('https://api.jwst-hub.com/track');
  var data = await response.json();

  var { 
    distanceEarthKm, 
    launchElapsedTime, 
    distanceL2Km, 
    percentageCompleted,
    speedKmS,
    deploymentImgURL
  } = data;

  input_distanceEarthKm.value = distanceEarthKm;
  input_launchElapsedTime.value = launchElapsedTime;
  input_distanceL2Km.value = distanceL2Km;
  input_percentageCompleted.value = percentageCompleted;
  input_speedKmS.value = speedKmS;

  img_deploymentImgURL.src = deploymentImgURL;
}

setInterval(() => app(), 1000 );