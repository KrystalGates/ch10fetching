// Practice: Displaying Foods
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

// Practice: Fetching Other People's Data
// Your job is to query the Open Food Facts API for each of your
// products, and list the following additional information.
// Ingredients
// Country of origin
// Calories per serving
// Fat per serving
// Sugar per serving

  let foodContainer = document.querySelector(".foodList")


const foodFactory = food =>{
  let foodAsHTML = `<div><h1>${food.name}</h1><p>Ingredients: ${food.ingredients}<p><p>Country of Origin: ${food.countries}</p><p>Calories: ${food.calories}</p><p>Fat per Serving: ${food.fat}</p><p>Sugar per Serving: ${food.sugar}</p></div>`
  return foodAsHTML
}

fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            console.log(food) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    food.ingredients = productInfo.product.ingredients_text
                    food.countries = productInfo.product.countries
                    food.calories = productInfo.product.nutriments.calories
                    food.fat = productInfo.product.nutriments.fat
                    food.sugar = productInfo.product.nutriments.sugars
                    if (food.calories !== ""){
                      food.calories = "Info not Available"
                    }
                    if(food.ingredients === ""){
                      food.ingredients = "Info not Available"
                    }
                    else if(food.ingredients === undefined){
                      food.ingredients = "Info not Available"
                    }
                    

                    console.log(food.ingredients)

                    // Produce HTML representation
                    const foodAsHTML = foodFactory(food)

                    // Add representaiton to DOM
                    foodContainer.innerHTML+=foodAsHTML
                })
        })
    })

