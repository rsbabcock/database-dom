// In your JavaScript file, load your home inventory from local storage.
// Access Data from local storage
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

const loadedDatabase = loadDatabase("Home Inventory")
// console.log(loadedDatabase);
// Iterate over every data set in the database and create a <section> component.
const dataIteration = document.querySelector('#myStuff')

for(let type in loadedDatabase) { 
// current type holds the array in homeinventory database
    const currentTypeArray = loadedDatabase[type]
    currentTypeArray.forEach(itemInArray => {
        const itemSection = document.createElement('section')
        const nameP = document.createElement('p')
        nameP.textContent = itemInArray.name
        itemSection.appendChild(nameP)

        const locationP = document.createElement('p')
        locationP.textContent = itemInArray.location 
        itemSection.appendChild(locationP)

        const descP = document.createElement('p')
        descP.textContent = itemInArray.description
        itemSection.appendChild(descP)
        
        dataIteration.appendChild(itemSection)
    });
}

// That component itself should contain three <p> components. One for the name, location, and description.
// Attach the p components as children of the section.
// Attach the section as a child of the article.

// function dump_props(obj, obj_name) {
//     var result = '';
//     for (var i in obj) {
//       result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
//     }
//     result += '<hr>';
//     return result;
//   }