"use strict";

let Handlebars = require('hbsfy/runtime'),
    cakeInventory = require('./bakery-factory'),
    cakeTemplate = require('../templates/cake-grid.hbs'),
    welcomeTemplate = require('../templates/welcome-template.hbs'),
    welcomeData = require('./welcome-data.js');

$('#welcome').append(welcomeTemplate(welcomeData));

// 'registerHelper' takes a string (the name of the function) and a function
Handlebars.registerHelper("incrementer", value => parseInt(value) + 1);
Handlebars.registerPartial("footer", require('../templates/partials/footer.hbs'));

function populatePage(cakes) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = cakeTemplate(cakes);
    $('#cake-cards').append(newDiv);
}

// get the cakes
cakeInventory.loadInventory()
    .then((inventory)=> populatePage(inventory))
    .catch((reject)=> console.log("Problem:", reject));
        