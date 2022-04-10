import axios from "axios";

export function fetchData(){
    const response = axios.get('https://api.randomuser.me/');
    // console.log(response)
    return response;
} 