import axios from 'axios';

export function getCountryDetail(id){
    return function(dispatch) => {
        return axios.get("http//localhost:3001/countries/" + id)
    }
}