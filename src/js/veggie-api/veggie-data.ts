
// Request funtcion using the Veg Guide API

export const getVeggieRestaurants = async (latitude: number, longitude: number): Promise<any> => {
    const response = await fetch(`https://www.vegguide.org/search/by-lat-long/${latitude},${longitude}`);
    return await response.json();
}
// SEE main.ts for reponse


