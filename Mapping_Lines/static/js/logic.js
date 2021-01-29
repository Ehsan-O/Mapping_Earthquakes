// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -100.3790], 5);

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
// var marker = L.marker([34.0522, -118.2437]).addTo(map);

// L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: 'lightyellow',
//     fillOpacity: 0.5,
//     radius: 50
// }).addTo(map);

// Get data from cities.js
// let cityData = cities

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(city => {
//     console.log(city);
//     L.circleMarker(city.location,{
//         radius: city.population/200000,
//         color: "orange",
//         fillColor: "orange",
//         fillOpacity: 0.5,
//         weight: 4
//     })
//     .bindPopup(`<h2>${city.city},${city.state}</h2> <hr> <h3>${city.population.toLocaleString()}</h3>`)
//     .addTo(map);
// });


// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [30.1974, -97.6663],
    [43.6777, -79.6247],
    [40.6414, -73.7782]  

];


// Create a polyline using the line coordinates and make the line red.
L.polyline(line,{
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: "5,10"

}).addTo(map)

