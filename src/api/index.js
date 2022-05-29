import axios from 'axios';
import ApiConstants from './ApiConstants';
import qs from 'qs';

export default async function api(path, params = {},method){
    const token = localStorage.getItem("token")
    let options;
    if(!params){
        options = {
            url: ApiConstants.BASE_URL + path,
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            method: method

        };
    }else{ 
        
        options = {
            url: ApiConstants.BASE_URL + path,
            headers: { 
                // Accept: 'application/json', 'Content-Type': 'application/json',
                'content-type': 'application/x-www-form-urlencoded',
                Authorization: 'Bearer ' + token
             },
            method: method,
            data: qs.stringify(params),
        }
    } 


    return axios(options).then((resp) => {
        return resp.data
    }).then((json) => json)
    .catch((error) => {
        console.log(error)
    })
}