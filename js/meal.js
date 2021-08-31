const searchFood = () => {
    const searchInput = document.getElementById("search-input");
    searchInputText = searchInput.value;
    //console.log(searchInputText);
    searchInput.value = "";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`)
        .then(res => res.json())
        .then(data => displaySearch(data.meals));
}

const displaySearch = foods => {
    //console.log(foods);
    const searchResult = document.getElementById("search-result");
    searchResult.textContent = '';
    foods.forEach(food => {
        //console.log(food);
        const divCol = document.createElement('div');
        divCol.classList.add('col');
        divCol.innerHTML = `
        <div onclick="loadFoodDetails(${food.idMeal})" class="card h-100">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(divCol);
    })
}

const loadFoodDetails = foodId => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
        .then(res => res.json())
        .then(data => displayFoodDetails(data.meals[0]));
}

const displayFoodDetails = detail => {

    const detailResult = document.getElementById("detail-result");
    const divCol2 = document.createElement('div');
    divCol2.classList.add('col');
    divCol2.innerHTML = `
        <div class="card h-100">
            <img src="${detail.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${detail.strMeal}</h5>
                <p class="card-text">${detail.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
    detailResult.appendChild(divCol2);
}