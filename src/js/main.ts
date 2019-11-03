import { ILocation, initMap } from './maps/maps';
import { getVeggieRestaurants } from './veggie-api/veggie-data';
import { getLatLong } from './maps/geocoder';

//locations
const London: ILocation = {name: "London", lat: 51.5033, lng: -0.1195};
const Paris: ILocation = {name: "Paris", lat: 48.8566, lng: 2.3522};
const Seoul: ILocation = {name: "Seoul", lat: 37.5665, lng: 126.9780};

//function to update the html with new restaurants
const updateHtml = (topRestaurants, location:ILocation) => {
    document.getElementById("restaurants").innerHTML = `<h2>Showing restaurants in: ${location.name}</h2><p>1: ${topRestaurants[0].name}: ${topRestaurants[0].short_description} </p><p>2: ${topRestaurants[1].name}: ${topRestaurants[1].short_description}</p><p>3: ${topRestaurants[2].name}: ${topRestaurants[2].short_description}</p><p>4. ${topRestaurants[3].name}: ${topRestaurants[3].short_description}</p><p>5. ${topRestaurants[4].name}: ${topRestaurants[4].short_description}</p>`
}

// Get the restaurants for a specific area
getVeggieRestaurants(London).then((data) => {

    // Response data from the veggie restarants API
    console.log(data);
    const topRestaurants = data.entries.splice(0,5);
    console.log(topRestaurants);

    //updating html on the page
    updateHtml(topRestaurants, London);
});

//function to generate map and update the html for a new location:

const generateNewMap = (location: ILocation) => {
    let topRestaurants;
    let restOne;
    getVeggieRestaurants(location).then((data) => {

        // Response data from the veggie restarants API
        topRestaurants = data.entries.splice(0,5);
    
        //updating html on the page
        updateHtml(topRestaurants, location);

        //get lat and long for each restaurant 
        //geocoder api request

        getLatLong(topRestaurants[0]).then((data) => {
            // Response data from the  API
            console.log(data.results[0].geometry.location);
            restOne = data.results[0].geometry.location;
            return restOne;
        })
    }).then(() => getLatLong(topRestaurants[0]).then((data) => {
        console.log(data.results[0].geometry.location);
        restOne = data.results[0].geometry.location;
        return restOne;
    })).then(() => initMap(location, topRestaurants, restOne));
}

//intitial map on the page
generateNewMap(London);

// Button functionality for changing the map for a new city

const parisButton = document.getElementById("paris-button");
parisButton.addEventListener("click", () => generateNewMap(Paris));

const londonButton = document.getElementById("london-button");
londonButton.addEventListener("click", () => generateNewMap(London));

const seoulButton = document.getElementById("seoul-button");
seoulButton.addEventListener("click", () => generateNewMap(Seoul));





