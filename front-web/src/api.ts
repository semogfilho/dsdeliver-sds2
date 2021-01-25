import axios from "axios";

const API_URL = 'https://semogfilho-sds2.herokuapp.com';
const mapboxToken=process.env.REACT_APP_ACCESS_TOKEN_MAPBOX;

export function fetchProducts() {
    return axios(`${API_URL}/products`)
}

export function fectchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}