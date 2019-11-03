//function to change the address of something into a lat and long

//takes in address 1, address 2, and country

export const getLatLong = async (addressOne:string, addressTwo:string, country:string): Promise<any> => {
    const newAddressOne = addressOne.split(' ').join('+');
    const newAddressTwo = addressTwo.split(' ').join('+');
    const newCountry = country.split(' ').join('+');
    const searchString = `${addressOne}+${addressTwo}+${country}`;
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchString}&key=AIzaSyCVF0MR-UK7X5IRbYzxSLM6B921NbZoFnM`);
    return await response.json();
}
