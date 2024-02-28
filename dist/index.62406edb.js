const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const KEY = "477a9ebc-20d9-41b3-b918-e8b575c58bec";
const handleGetData = ()=>{
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${KEY}`, {
        method: "GET"
    }).then((data)=>data.json()).then((data)=>{
        const resultsContainer = document.querySelector(".results");
        resultsContainer.innerHTML = "";
        data.data.recipes.forEach((recipe)=>{
            const recipeItem = document.createElement("li");
            recipeItem.classList.add("preview");
            recipeItem.innerHTML = `
        <a class="preview__link preview__link--active" href="#${recipe.id}">
          <figure class="preview__fig">
            <img src="${recipe.image_url}" alt="${recipe.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${recipe.title}</h4>
            <p class="preview__publisher">${recipe.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="src/img/icons.svg#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      `;
            resultsContainer.appendChild(recipeItem);
        });
    }).catch((error)=>console.error("Error fetching data:", error));
};
handleGetData(); // https://forkify-api.herokuapp.com/v2
 ///////////////////////////////////////

//# sourceMappingURL=index.62406edb.js.map
