import { ILocation, initMap } from './maps/maps';
import { getOnePokemon } from './pokemon/pokemon';

//locations
const London: ILocation = {lat: 51.5033, lng: -0.1195};
const Paris: ILocation = {lat: 48.8566, lng: 2.3522};
const Seoul: ILocation = {lat: 37.5665, lng: 126.9780};

//intitial map on the page
initMap(London);

// SIMPLE GET USING THE POKEAPI
getOnePokemon(1).then((data) => {

    // HERE'S YOUR RESPONSE DATA FOR POKEMON!!
    console.log(data);

    // Here's an example of a map to get the data we want from the object. I knew we taught that for a reason...
    const abilities = data.abilities.map((ability) => {
        return ability.ability.name;
    })
    console.log(abilities);
});