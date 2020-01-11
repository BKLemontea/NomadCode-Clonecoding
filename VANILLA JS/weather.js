const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude; // 위도
    const longtitude = position.coords.longtitude; // 경도
    const coordsObj = {
        latitude, // latitude: latitude, 이름이 같은 경우에는 생략 가능 ex) latitude
        longtitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {

    }
}

function init(){
    loadCoords();
}

init();