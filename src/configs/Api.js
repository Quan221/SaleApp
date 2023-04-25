import axios from "axios"

import cookies from "react-cookies"

export let endpoints = {

    // "register": "/users/",
    // "orders": "/orders/",
    // "current-user": "/users/current-user/",
    // "login": "/o/token/", //Use Django
    // "register-shipper": "/register-shipper/",
    // "products": "/products/",
    // "products-detail": (productsId) => `/products/${productsId}/`,
    // "addorder": "/orders/",
    // "additems": "/items/",
    // 'my-orders': '/orders/my-orders/',
    // "list-orders": '/shippers/orders/',
    // "changeStatus": (orderId) => `/orders/${orderId}/change-status/`,
    // "categories": '/categories/',
    // "getProductByCate": (cateId) => `/categories/${cateId}/products/`,

    "register": "/User/register/",
    "login": "/User/login/",
    "current-user": "/User/current-user/",
    "categories": "/Category/",
    "products": "/Product/",
    "products-detail": (productsId) => `/Product/${productsId}/`,
    "add-order": "/Order/",
    "my-order": "/Order/my-order/",
    "list-order": "/Order/waiting/",
    "changeStatus": (orderId) => `/Order/${orderId}/pick-up/`,
    "changeStatusShip": (orderId) => `/Order/${orderId}/mark-complete/`,
    "register-shipper": "/User/register-shipper/",
    "order-admin": "/Order/admin/",




}

// export const authApi = () => {
//     return axios.create({
//         baseURL: "http://127.0.0.1:8000/",
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem('userToken')}`
//         }
//     })
// }


// export default axios.create({
//     baseURL: "http://127.0.0.1:8000/"

// })
export const authApi = () => {
    return axios.create({
        baseURL: "https://localhost:7097/api",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    })
}

export default axios.create({
    baseURL: "https://localhost:7097/api"

})