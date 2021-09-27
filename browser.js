alert( 'conectado')
//lenguage broser 
const lang = navigator.language
console.log(lang)

//usuario de la web
var user = navigator.userAgent
console.log(user )

var myCacheStorage = self.caches;
console.log(myCacheStorage) 

//pixrl
let depth = window.screen.pixelDepth
console.log(depth)

let screenW = window.screen.width
var screenH = window.screen.height
console.log(screenW, screenH)

//geolocacion
var x =document.getElementById("demo");

function getlocation () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by thus browser"

    }
}

function showPosition(Position) {
    x.innerHTML = "Latitude:" + Position.coords.latitude + "<br>Longitude: " + position.coords.longitude; 
}

getlocation()