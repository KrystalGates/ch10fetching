// Create a DOM element in your index.html with a class of foodList.
// Create a function which returns a string template. The template
// is the HTML representation for a food item.
// Create a function that inserts an HTML representation
// of a food into the DOM
// fetch("http://localhost:8088/food")
//   .then(data => data.json())
//   .then(food => {
//     let foodContainer = document.querySelector(".foodList");
//     food.forEach(item => {
//       foodContainer.innerHTML += `<div><h1>${item.name}</h1><p>${
//         item.category
//       }</p><p>${item.ethnicity}</div>`;
//     });
//   });

// Your job is to query the Open Food Facts API for each of your
// products, and list the following additional information.
// Ingredients
// Country of origin
// Calories per serving
// Fat per serving
// Sugar per serving

fetch("http://localhost:8088/food")
  .then(data => data.json())
  .then(myParsedFoods => {
    myParsedFoods.forEach(food => {
      console.log(food.barcode);
       // Now fetch the food from the Food API
       fetch(`https://world.openfoodfacts.org/api/v0/product/${item.barcode}.json`)
       .then(response => response.json())
       .then(productInfo => {
           food.ingredients = productInfo.product.ingredients

           // Produce HTML representation
           let foodContainer = document.querySelector(".foodList")
           const foodAsHTML = foodFactory(food) {
               foodContainer.innerHTML += `<div><p>Ingredients: ${food.ingredients}</p></div>'
           }

           // Add representaiton to DOM
           addFoodToDom(foodAsHTML)
       })
})
})


 


