let find = document.querySelector("button")

find.addEventListener("click", async function(){
    // let igr1 = "tuna"
    // let igr2 = "tomato"
    // let igr3 = "pepper"
    let igr1 = document.querySelector("#igr1").value
    let igr2 = document.querySelector("#igr2").value
    let igr3 = document.querySelector("#igr3").value

    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${igr1}%20${igr2}%20${igr3}&app_id=5cfcc9f3&app_key=4d4502eb96e18028cafc0ee5631704c3`)
    const data = await response.json()

    let recipes = data.hits

    if(igr1!=""&&igr2!=""&&igr3!=""){
        if(recipes.length > 0){
            document.querySelector("#container").innerHTML = `<div id="result" class="sm:grid grid-cols-2 md:grid grid-cols-3 lg:grid-cols-6"></div>`
            for(let i=0; i<recipes.length; i++){
                document.querySelector("#result").innerHTML += `
                <div class="text-sm shadow-md w-56 h-75 m-4 rounded-lg hover:bg-[#F7F7F7]" onclick="unique('${recipes[i].recipe.uri}')">
                    <img src=${recipes[i].recipe.image} class="rounded-lg w-[100%] h-[20vh] m-auto p-4"></img>
                    <p class="font-bold text-center text-[#3E2C1B]">${recipes[i].recipe.label}</p>
                    <div class="flex flex-row justify-center m-4">
                    <p style="visibility:${isItVegan(recipes[i].recipe.healthLabels)}" class="mx-2 mx-2 flex items-end text-[#967D65]">Vegan</p>
                    <p style="visibility:${isItVegetarian(recipes[i].recipe.healthLabels)}" class="mx-2 flex items-end text-[#967D65]">Vegetarian</p>
                    </div>
                </div>`
            }
        }else{
            document.querySelector("#container").innerHTML=`<div id="result" class="flex flex-row justify-items-center"><img src="../assetsProjeto/404.svg" class="h-[25vh] my-[10vh] mx-auto"></div>`    
        }
    }
    
})

function isItVegan(recipe){
    if (recipe.includes("Vegan")) {
        return "visible"
    } else {
        return "hidden"
    }
}

function isItVegetarian(recipe){
    if (recipe.includes("Vegetarian")) {
        return "visible"
    } else {
        return "hidden"
    }
}

function unique(recipe){
    console.log(recipe);
    recipe = recipe.replace("#", "%23")
    console.log(recipe);
    localStorage.setItem("recipe",recipe)
    location.href = "../pages/recipeDetail.html"
}