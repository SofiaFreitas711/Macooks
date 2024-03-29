let recipe = localStorage.getItem("recipe")
console.log(recipe)
recipe = recipe.split("_")  //from the uri given it splits it where the "_" is found to get the id
recipe = recipe[1] //id given

async function details(){
    const response = await fetch(`https://api.edamam.com/api/recipes/v2/${recipe}?type=public&app_id=5cfcc9f3&app_key=4d4502eb96e18028cafc0ee5631704c3`)
    const data = await response.json()

    let detail = data.recipe
    console.log(detail);
    
    document.querySelector("#title").innerHTML=detail.label

    let igrs = detail.ingredientLines
    for(let i=0; i<igrs.length; i++){
        document.querySelector("#igrs").innerHTML += `<p>${igrs[i]}</p>`
    }

    let img = document.querySelector("#image")
    img.src = detail.images.REGULAR.url

    let prep = document.querySelector("#prep")
    prep.href = detail.url
    

}

details()