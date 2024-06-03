
window.addEventListener("message", function(event) {
    const recipeData = event.data;
    
    // Display recipe information in the div
    const recipeContainer = document.getElementById("recipeContainer");

    // Clear previous content
    recipeContainer.innerHTML = '';

    recipeData.meals.forEach(meal => {
        const name = document.createElement("h1");
        name.textContent = meal.strMeal;

        const image = document.createElement("img");
        image.src = meal.strMealThumb;
        image.alt = meal.strMeal;
        image.style.width = "200px"; // Set width of the image
        image.style.height = "200px"; // Set height of the image

        const ingredients_list = document.createElement("ul");
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && measure) {
                const listItem = document.createElement("li");
                listItem.textContent = `${measure} ${ingredient}`;
                ingredients_list.appendChild(listItem);
            }
        }

        const process = document.createElement("p");
        process.textContent = meal.strInstructions;

        const mealDiv = document.createElement("div");
        mealDiv.classList.add("meal");
        mealDiv.appendChild(name);
        mealDiv.appendChild(image);
        mealDiv.appendChild(ingredients_list);
        mealDiv.appendChild(process);

        recipeContainer.appendChild(mealDiv);
    });
});
















































































/*
// newPage.js for main image biryani
window.addEventListener("message", function(event) {
    const recipeData = event.data;
    
    // Display recipe information in the div
    const name = document.getElementById("meal_name");
    const image = document.getElementById("meal_image");
    const ingredients_list = document.getElementById("ingredients_list");
    const process = document.getElementById("process");
    recipeData.meals.forEach(meal => {
        name.textContent=meal.strMeal;
        image.src=meal.strMealThumb;
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && measure) {
                const listItem = document.createElement("li");
                listItem.textContent = `${measure} ${ingredient}`;
                ingredients_list.appendChild(listItem);
            }
        }
        process.textContent = meal.strInstructions;
        
    });
});

*/







