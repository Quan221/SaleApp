import axios from "axios"

import cookie from "react-cookies"

export let endpoints = {

   "register": "/users/",
   "orders":"/orders/",
   "current-user": "/users/current-user/",
   "login":"/o/token/",
   "register-shipper":"/register-shipper/",
  




}
export const authApi = () => {
    return axios.create({
        baseURL: "http://127.0.0.1:8000/",
        headers: {
            'Authorization': `Bearer ${cookie.load('userToken')}`
        }
    })
}


export default axios.create({
    baseURL:"http://127.0.0.1:8000/"

})