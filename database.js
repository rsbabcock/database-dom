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
    
    for(let prop in itemInArray) => {
        const pComponent = document.createElement('p')
        pComponent.textContent = itemInArray[prop]
        itemSection.appendChild(nameP)      
        dataIteration.appendChild(itemSection)
    }
    });
}

// // 
// for (let type in HomeInventoryDatabase) {
//     const currentTypeArray = HomeInventoryDatabase[type]

//     currentTypeArray.forEach(itemInArray => {
//         const itemSection = document.createElement("section")

//         for (let prop in itemInArray) {
//             const pComponent = document.createElement("p")
//             pComponent.textContent = itemInArray[prop]
//             itemSection.appendChild(pComponent)
//             inventoryEl.appendChild(itemSection)
//         }

//     });
