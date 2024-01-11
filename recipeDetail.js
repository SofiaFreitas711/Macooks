let recipe = localStorage.getItem("recipe")
console.log(recipe);

async function details(){
    console.log(recipe);
    const response = await fetch(`https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${recipe}&app_id=5cfcc9f3&app_key=4d4502eb96e18028cafc0ee5631704c3`)
    const data = await response.json()

    let detail = data.hits
    console.log(detail)

    document.querySelector("#title").innerHTML=detail[0].recipe.label

    let bg = document.querySelector("#bg")
    bg.className = `w-full h-80 bg bg-center bg-[url(${detail[0].recipe.images.LARGE.url})]`

    let igrs = detail[0].recipe.ingredientLines
    for(let i=0; i<igrs.length; i++){
        document.querySelector("#igrs").innerHTML += `<p>${igrs[i]}</p>`
    }

    document.querySelector("#container").innerHTML += `<a href="${detail[0].recipe.url}"><p>See the preparation!</p></a>`

}

details()