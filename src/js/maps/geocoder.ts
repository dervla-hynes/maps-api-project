//function to change the address of something into a lat and long

//takes in address 1, address 2, and country

export const getLatLong = async (restaurant): Promise<any> => {
    const searchString = `${restaurant.address1}+${restaurant.address2}+${restaurant.country}`;
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchString}&key=AIzaSyCVF0MR-UK7X5IRbYzxSLM6B921NbZoFnM`);
    return await response.json();
}


