let find = document.querySelector("button")

find.addEventListener("click", async function(){
    let igr1 = document.querySelector("#igr1").value
    let igr2 = document.querySelector("#igr2").value
    let igr3 = document.querySelector("#igr3").value

    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${igr1}%20${igr2}%20${igr3}&app_id=5cfcc9f3&app_key=4d4502eb96e18028cafc0ee5631704c3`)
    const data = await response.json()

    let recipes = data.hits

    if(igr1!=""&&igr2!=""&&igr3!=""){
        console.log(recipes);
        if(recipes.length > 0){
            document.querySelector("#result").innerHTML = '<div id="result" class="grid grid-cols-6 justify-items-center"></div>'
            for(let i=0; i<recipes.length; i++){
                document.querySelector("#result").innerHTML += `
                <div class="shadow-md w-56 h-80 m-6 rounded-md" onclick="unique('${recipes[i].recipe.uri}')">
                    <img src=${recipes[i].recipe.image} class="rounded-sm h-[20vh] m-auto p-5"></img>
                    <p class="text-center text-[#3E2C1B]">${recipes[i].recipe.label}</p>
                    <div class="flex flex-row justify-between">
                        <p>1</p>
                        <p>2</p>
                    </div>
                </div>`
            }
        }else{
            document.querySelector("#result").innerHTML=`<div id="result" class="flex flex-row justify-items-center"><img src="assetsProjeto/404.svg" class="h-15 m-auto"></div>`    
        }
    }
    
})

function unique(recipe){
    console.log(recipe);
    recipe = recipe.replace("#", "%23")
    console.log(recipe);
    localStorage.setItem("recipe",recipe)
    location.href = "recipeDetail.html"
}