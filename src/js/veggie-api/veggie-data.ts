import { ILocation } from "../maps/maps";

// Request funtcion using the Veg Guide API

export const getVeggieRestaurants = async (location:ILocation): Promise<any> => {
    const latitude = location.lat;
    const longitude = location.lng;
    const response = await fetch(`https://www.vegguide.org/search/by-lat-long/${latitude},${longitude}`);
    return await response.json();
}
// SEE main.ts for reponse


