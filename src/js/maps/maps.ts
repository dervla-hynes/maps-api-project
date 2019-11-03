import {} from 'googlemaps';
import { styles } from './maps-data';

export interface ILocation {
  name: string;
  lat: number,
  lng: number
}

//Initialising a map function

export const initMap = (coordinates: ILocation, restaurants, restOne): google.maps.Map => {
  let map: google.maps.Map = new google.maps.Map(
    document.getElementById('map'), 
    { zoom: 11, 
      center: coordinates
    }
  );
  let markerOne: google.maps.Marker = new google.maps.Marker({position: restOne, map: map});
  return map;
}