"use strict"

import { cardProduct } from "../components/cardProduct.js"

const renderArea = document.querySelector("#render-area")

const BASE_URL = "http://localhost:5501/Aync-Await/data/products.json"

fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
        data.map((product) => {
            renderArea.innerHTML += cardProduct(product)
        });
    })