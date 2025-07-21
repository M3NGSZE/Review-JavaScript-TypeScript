"use strict"

import { cardProduct } from "../components/cardProduct.js"
import { getData } from "../store/fetchApi.js"

const renderArea = document.querySelector("#render-area")

const products = await getData("products")
const users = await getData("users")

// console.log(products)
// console.log(users)

products.map((product) => {
    renderArea.innerHTML += cardProduct(product)
})


/*

const BASE_URL = "http://localhost:5501/Aync-Await/data/products.json"

fetch(BASE_URL, 
    {method: "GET",
        headers: {
            "Authorization": "baisc authorization",
            "Content-Type": "application/json"
            
        }
    })
    .then((res) => res.json())
    .then((data) => {
        data.map((product) => {
            renderArea.innerHTML += cardProduct(product)
        });
    })

*/