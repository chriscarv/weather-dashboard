var getCity = document.getElementById("city");
var setCity;
var search = document.getElementById("search");


search.addEventListener("click",function(){
var getLat;
var getLon;
   setCity = getCity.value;
  // console.log(setCity);
   var geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+setCity+"&appid=1885f1a68cd46101dd56b8a004d5ac28";
   // console.log(geoUrl);
   fetch(geoUrl)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    getLat =data[0].lat;
    getLon =data[0].lon;
   var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+getLat+"&lon="+getLon+"&appid=b8cddbe16883df6d57961bb9d1a33663";
//console.log(oneCallUrl);
fetch(oneCallUrl)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})

})

})

