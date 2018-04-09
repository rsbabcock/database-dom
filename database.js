// In your JavaScript file, load your home inventory from local storage.
// Access Data from local storage
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

const loadedDatabase = loadDatabase("Home Inventory")
console.log(loadedDatabase);
// Iterate over every data set in the database and create a <section> component.
let dataIteration = ""
for(let key in loadedDatabase) {
    loadedDatabase[i] 

// That component itself should contain three <p> components. One for the name, location, and description.
// Attach the p components as children of the section.
// Attach the section as a child of the article.