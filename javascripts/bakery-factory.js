"use strict";

let inventory = [];
let bakery = {};

// get inventory
// expose a public method 
// to return the inventory
bakery.getInventory = () => inventory;


// load data
bakery.loadInventory = ()=>{
    return new Promise((resolve,reject)=>{    
        $.ajax({
            url: "../inventory.json"
        }).done(data => resolve(data))
          .fail(error => reject(error));
    });
};

module.exports = bakery;