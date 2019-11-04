# Google Maps 'VeggiMaps' Project

## Project notes 
This project displays a map for a given location and the first 5 vegetarian restaurants in that city. The buttons for each city generate a new map, a new list of restaurants on the page and a new marker.

This project uses three APIs working together:

1. Google maps API - generates a map and adds the markers.
2. 'Veg Guide' REST API - gets data about vegetarian restaurants for a given location.
3. Geocoder API - gets a lat and long for a given address input.

I have practiced returning promises from fetch calls to external APIs, and how to deal with multiple promises that are asyncronous.

The markers are currently restricted due to the Veg Guide API having incomplete address data, so I have demonstrated adding a marker for the first restaurant for each location only.

## Notes on build

Need to install yarn: "yarn install"
Then you can build the Typescript and SCSS using "yarn build"