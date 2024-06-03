// script for search bar and search button.........
const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
async function getdish(query) {
    try {
        const url = `${baseUrl}${query}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}


const srch = document.querySelector("#search");
const press = document.querySelector("#btn");

press.addEventListener("click", async () => {
    const x = srch.value;
    if (!x) return;

    try {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`;
        const response = await fetch(url);
        const data = await response.json();

        // Open new page and pass the data
        const newPage = window.open("newPage.html");
        newPage.onload = function() {
            newPage.postMessage(data, "*");
        };
    } catch (error) {
        console.error('Error:', error);
    }
});





// script for navbar button(chicken recipies...).........
const ex_btn =document.querySelector("#explore");
ex_btn.addEventListener("click", async () => {
    try {
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken";
        const response = await fetch(url);
        const data = await response.json();

        // Open new page and pass the data
        const newPage = window.open("newPage.html");
        newPage.onload = function() {
            newPage.postMessage(data, "*");
        };
    } catch (error) {
        console.error('Error:', error);
    }
});





//  script for navbar button dropdown links.........
document.addEventListener("DOMContentLoaded", function() {
    // Get all the image elements
    const recipelinks = document.querySelectorAll("a[href]");

    // Add click event listener to each image
    recipelinks.forEach(link => {
        link.addEventListener("click", function() {
            // Get the ID of the clicked image
            const recipeType = link.id;
            const newPage=window.open("newPage.html");
            // Fetch recipe details based on the recipe type
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeType}`)
                .then(response => response.json())
                .then(data => {
                    // Serialize the data to JSON string
                    newPage.postMessage(data,"*");
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    });
});





// script for middle main image button(Todays secret dish)...........
const random_dish_btn =document.querySelector("#newdish");
random_dish_btn.addEventListener("click", async () => {
    try {
        const url = "https://www.themealdb.com/api/json/v1/1/random.php";
        const response = await fetch(url);
        const data = await response.json();

        // Open new page and pass the data
        const newPage = window.open("newPage.html");
        newPage.onload = function() {
            newPage.postMessage(data, "*");
        };
    } catch (error) {
        console.error('Error:', error);
    }
});





//script for all images as links.......
        document.addEventListener("DOMContentLoaded", function() {
            // Get all the image elements
            const recipeImages = document.querySelectorAll("img");

            // Add click event listener to each image
            recipeImages.forEach(image => {
                image.addEventListener("click", function() {
                    // Get the ID of the clicked image
                    const recipeType = image.id;
                    const newPage=window.open("newPage.html");
                    // Fetch recipe details based on the recipe type
                    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeType}`)
                        .then(response => response.json())
                        .then(data => {
                            // Serialize the data to JSON string
                            newPage.postMessage(data,"*");
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                });
            });
        });













































/*
document.addEventListener("DOMContentLoaded", function() {
    const cakeTypes = ['Pancakes', 'Rock Cakes', 'Carrot Cake' ,'Eccles Cakes','Christmas cake','New York cheesecake']; // Add more types as needed

    const recipeContainer = document.getElementById("recipeContainer");

    // Function to fetch and display recipe details for a biryani type
    // Function to fetch and display recipe details for a biryani type
async function displayRecipe(cakeType) {
    try {
        // Fetch meal data from the API for the specified biryani type
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cakeType}`);
        const data = await response.json();

        // Check if data.meals is not null and has at least one item
        if (data.meals && data.meals.length > 0) {
            // Assume data.meals is an array of meals, we'll use the first one
            const meal = data.meals[0];

            // Create HTML elements to display recipe details
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipe");

            recipeDiv.innerHTML = `
                <h1>${meal.strMeal}</h1>
                <img src="${meal.strMealThumb}" alt="Meal Image">
                <h2>Ingredients:</h2>
                <ul>
                    ${getIngredientsList(meal)}
                </ul>
                <h2>Process:</h2>
                <p>${meal.strInstructions}</p>
            `;

            // Append recipe details to the container
            recipeContainer.appendChild(recipeDiv);
        } else {
            console.error('No meals found for', cakeType);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


    // Function to generate ingredients list HTML
    function getIngredientsList(meal) {
        let ingredientsListHTML = '';
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && measure) {
                ingredientsListHTML += `<li>${measure} ${ingredient}</li>`;
            }
        }
        return ingredientsListHTML;
    }

    // Display recipe details for each biryani type
    cakeTypes.forEach(cakeType => {
        displayRecipe(cakeType);
    });
});


*/
