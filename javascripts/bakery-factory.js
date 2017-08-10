"use strict";

let inventory = [];
let bakery = {};

// get inventory
// expose a public method 
// to return the inventory
bakery.getInventory = () => inventory;

// helper to push the firebase objects to inventory
function fillInventory (data) {
    data.forEach((cake)=>inventory.push(cake));
}


// load data
bakery.loadInventory = ()=>{
    return new Promise((resolve,reject)=>{    
        $.ajax({
            url: "https://general-purpose-64025.firebaseio.com/ccakes.json"
        }).done(data => {
            console.log("data:", data);
            fillInventory(data);
            resolve(data);
        })
          .fail(error => reject(error));
    });
};

module.exports = bakery;