//recommendation
let dishType =["Breakfast","Dinner","Lunch","Snack","Teatime"]
let num = Math.floor(Math.random()*dishType.length)
// setInterval(function(){
//     num = Math.floor(Math.random()*dishType.length)
// }, 5000)
//86400000 -> um dia
let chooseType = dishType[num]

async function insertRecommendation(){
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=any&app_id=5cfcc9f3&app_key=4d4502eb96e18028cafc0ee5631704c3&mealType=${chooseType}`)
    const data = await response.json()

    let recipes = data.hits
    for(let i=0; i < 5; i++) {
        document.querySelector("#recommendation").innerHTML += `
        <div class="shadow-md w-56 h-80 m-6 rounded-md hover:bg-[#F7F7F7]" onclick="unique('${recipes[i].recipe.uri}')">
            <img src=${recipes[i].recipe.image} class="rounded-2xl h-[30vh] m-auto p-4"></img>
            <p class="text-center text-[#3E2C1B]">${recipes[i].recipe.label}</p>
            <div class="flex flex-row justify-center m-4">
                <p ${(isItVegan(recipes[i].recipe.healthLabels))? style="visibility: visible" : style="visibility: hidden"} class="mx-2 mx-2 flex items-end">Vegan</p>
                <p ${(isItVegetarian(recipes[i].recipe.healthLabels))? style="visibility: visible" : style="visibility: hidden"} class="mx-2 flex items-end">Vegetarian</p>
            </div>

        </div>`
    }

}
insertRecommendation()

//insert meat recipes

async function insertMeat(){
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=any&q=meat&app_id=5cfcc9f3&app_key=4d4502eb96e18028cafc0ee5631704c3`)
    const data = await response.json();

    let recipes = data.hits;
    console.log(recipes);

    for(let i=0; i < 5; i++) {
            document.querySelector("#meat").innerHTML += `
            <div class="shadow-md w-56 h-80 m-6 rounded-md hover:bg-[#F7F7F7]" onclick="unique('${recipes[i].recipe.uri}')">
                <img src=${recipes[i].recipe.image} class="rounded-2xl h-[30vh] m-auto p-4"></img>
                <p class="text-center text-[#3E2C1B]">${recipes[i].recipe.label}</p>
                <div class="flex flex-row justify-between m-4">
                <p ${(isItVegan(recipes[i].recipe.healthLabels))? style="visibility: visible" : style="visibility: hidden"} class="mx-2 mx-2 flex items-end">Vegan</p>
                <p ${(isItVegetarian(recipes[i].recipe.healthLabels))? style="visibility: visible" : style="visibility: hidden"} class="mx-2 flex items-end">Vegetarian</p>
                </div>

            </div>`      
    }
}

insertMeat()

//insert fish meals
async function insertFish(){
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=any&q=fish&app_id=5cfcc9f3&app_key=4d4502eb96e18028cafc0ee5631704c3`)
    const data = await response.json()

    let recipes = data.hits

    for(let i=0; i < 5; i++) {
        document.querySelector("#water").innerHTML += `
        <div class="shadow-md w-56 h-80 m-6 rounded-md hover:bg-[#F7F7F7]" onclick="unique('${recipes[i].recipe.uri}')">
            <img src=${recipes[i].recipe.image} class="rounded-2xl h-[30vh] m-auto p-4"></img>
            <p class="text-center text-[#3E2C1B]">${recipes[i].recipe.label}</p>
            <div class="flex flex-row justify-between m-4">
            <p ${(isItVegan(recipes[i].recipe.healthLabels))? style="visibility: visible" : style="visibility: hidden"} class="mx-2 mx-2 flex items-end">Vegan</p>
            <p ${(isItVegetarian(recipes[i].recipe.healthLabels))? style="visibility: visible" : style="visibility: hidden"} class="mx-2 flex items-end">Vegetarian</p>
            </div>

        </div>`   
    }
}

insertFish()

//insert earth meals
async function insertEarth(){
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=veggie&app_id=5cfcc9f3&app_key=4d4502eb96e18028cafc0ee5631704c3`)
    const data = await response.json()

    let recipes = data.hits
    for(let i=0; i<5; i++){
        document.querySelector("#earth").innerHTML += `
        <div class="shadow-md w-56 h-80 m-6 rounded-md hover:bg-[#F7F7F7]" onclick="unique('${recipes[i].recipe.uri}')">
            <img src=${recipes[i].recipe.image} class="rounded-2xl h-[30vh] m-auto p-4"></img>
            <p class="text-center text-[#3E2C1B]">${recipes[i].recipe.label}</p>
            <div class="flex flex-row justify-between m-4">
            <p ${(isItVegan(recipes[i].recipe.healthLabels))? style="visibility: visible" : style="visibility: hidden"} class="mx-2 mx-2 flex items-end">Vegan</p>
            <p ${(isItVegetarian(recipes[i].recipe.healthLabels))? style="visibility: visible" : style="visibility: hidden"} class="mx-2 flex items-end">Vegetarian</p>
            </div>

        </div>`
    }
}

insertEarth()

// insert desserts
async function insertDessert(){
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=dessert&app_id=5cfcc9f3&app_key=4d4502eb96e18028cafc0ee5631704c3`)
    const data = await response.json()

    let recipes = data.hits
    for(let i=0; i<5; i++){
        document.querySelector("#sweets").innerHTML += `
        <div class="shadow-md w-56 h-80 m-6 rounded-md hover:bg-[#F7F7F7]" onclick="unique('${recipes[i].recipe.uri}')">
            <img src=${recipes[i].recipe.image} class="rounded-2xl h-[30vh] m-auto p-4"></img>
            <p class="text-center text-[#3E2C1B]">${recipes[i].recipe.label}</p>
            <div class="flex flex-row justify-between m-4">
            <p ${(isItVegan(recipes[i].recipe.healthLabels))? style="visibility: visible" : style="visibility: hidden"} class="mx-2 mx-2 flex items-end">Vegan</p>
            <p ${(isItVegetarian(recipes[i].recipe.healthLabels))? style="visibility: visible" : style="visibility: hidden"} class="mx-2 flex items-end">Vegetarian</p>
            </div>

        </div>`
    }
}

insertDessert()

//find recipe

let searchBtn = document.querySelector("#search")

searchBtn.addEventListener("click",async function(){
    let search = document.querySelector("input").value

    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=any&q=${search}&app_id=5cfcc9f3&app_key=4d4502eb96e18028cafc0ee5631704c3`)
    let data = await response.json()

    let recipeSearch = data.hits
    

    if(search != ""){
            if(recipeSearch.length > 0){
                        console.log(recipeSearch);
                        document.querySelector("#recipes").innerHTML = '<div id="result" class="grid grid-cols-6 justify-items-center"></div>'
                        for(let i=0; i<recipeSearch.length; i++){
                            document.querySelector("#result").innerHTML += `
                            <div class="shadow-md w-56 h-80 m-6 rounded-md hover:bg-[#F7F7F7]" onclick="unique('${recipeSearch[i].recipe.uri}')">
                                <img src=${recipeSearch[i].recipe.image} class="rounded-2xl h-[30vh] m-auto p-4"></img>
                                <p class="text-center text-[#3E2C1B]">${recipeSearch[i].recipe.label}</p>
                                <div class="flex flex-row justify-between">
                                <p ${(isItVegan(recipes[i].recipe.healthLabels))? style="visibility: visible" : style="visibility: hidden"} class="mx-2 mx-2 flex items-end">Vegan</p>
                                <p ${(isItVegetarian(recipes[i].recipe.healthLabels))? style="visibility: visible" : style="visibility: hidden"} class="mx-2 flex items-end">Vegetarian</p>
                                </div>
                    
                            </div>`
                        }
            }else{
                document.querySelector("#recipes").innerHTML=`<div id="result" class="grid justify-items-center"><img src="assetsProjeto/404.svg" class="h-15"></div>`
            }
        }     

})

function unique(recipeSearch) {
    recipe = recipeSearch.replace("#", "%23")
    localStorage.setItem("recipe",recipeSearch)
    location.href = "../pages/recipeDetail.html"        
}

function isItVegan(recipe){
    for(let i=0; i<recipe.length; i++){
        if(recipe[i] == "Vegan"){
            return true
        }
    }
}

function isItVegetarian(recipe){
    for(let i=0; i<recipe.length; i++){
        if(recipe[i] == "Vegetarian"){
            return true
        }
    }
}