// Add console.log to check to see if our code is working 
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
/*L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(feature);
      return L.marker(latlng)
      .bindPopup("<h2 align = center>" + feature.properties.name + "</h2>" + "<br>" + "<b>" +
        feature.properties.city + ", " + feature.properties.country + "</br>"); 
      //<br> + feature.properties.city);
      //.bindPopup("<h2>feature.properties.name  </h2>
      //<br>feature.properties.city + ", " + feature.properties.country);
    }

  }).addTo(map);*/

L.geoJson(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        // SKILL DRILL
        layer.bindPopup("<h3>" + "<b>" + "Airport code: " + feature.properties.faa + "</h3>"
            + "<br>" + "Airport name: " + feature.properties.name);
    }
}).addTo(map);



// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);

//We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
    
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);



