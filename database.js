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
let dataIteration = ""
for(let type in loadedDatabase) { 
    console.log(loadedDatabase)
    for(let item in loadedDatabase[type]) {
        console.log(loadedDatabase[type][item].name)
    }
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