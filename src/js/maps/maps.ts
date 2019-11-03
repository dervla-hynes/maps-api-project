import {} from 'googlemaps';
import { styles } from './maps-data';

export interface ILocation {
  name: string;
  lat: number,
  lng: number
}

//Initialising a map function

export const initMap = (coordinates: ILocation, restaurants): google.maps.Map => {
  let map: google.maps.Map = new google.maps.Map(
    document.getElementById('map'), 
    { zoom: 11, 
      center: coordinates
    }
  );
  let markerOne: google.maps.Marker = new google.maps.Marker({position: coordinates, map: map});
  let markerTwo: google.maps.Marker = new google.maps.Marker({position: coordinates, map: map});
  let markerThree: google.maps.Marker = new google.maps.Marker({position: coordinates, map: map});
  let markerFour: google.maps.Marker = new google.maps.Marker({position: coordinates, map: map});
  let markerFive: google.maps.Marker = new google.maps.Marker({position: coordinates, map: map});
  return map;
}