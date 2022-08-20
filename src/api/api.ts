import axios from "axios"
import { TMessageResponse } from "../types/types";


export const messageAPI = {
    getRandomMessage() {
        return axios.get<TMessageResponse>('https://api.chucknorris.io/jokes/random').then(res => res.data)
    }
}
