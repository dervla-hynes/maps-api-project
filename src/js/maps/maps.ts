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
  let markerOne: google.maps.Marker = new google.maps.Marker({position: restOne, map: map, icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=1|FE6256|000000'});
  return map;
}