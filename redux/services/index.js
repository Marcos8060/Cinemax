import { API_URL } from "@/utils/api-endpoints";
import axios from "axios";


class MovieApi {
    fetchTending = () =>{
        return new Promise((resolve,reject)=>{
            axios.get(API_URL.FETCH_TRENDING)
            .then((res) =>{
                return resolve(res.data.results)
            })
            .catch((err) =>{
                reject(err)
            })
        })
    }
}

export const movieApi = new MovieApi;