//Boucle pour récupérer mes repas
for (let i=0 ; i<7 ; i++) {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(function(response){
      let meal = response.meals[0]
      let ingredients = ''

      for (let j=1 ; j <= 20 ; j++) {
          let ingredient = meal[`strIngredient${j}`];
          if(ingredient != "" && ingredient != null) {
            ingredients += '<p>'+ingredient+'</p>'
          } else break
      }

      //Pour afficher sur la page HTML
      //Je sélectionne ma div #meal
      let div = document.getElementById("meal");
      div.innerHTML += `<div class="meal-item">
      <div class="meal-img" data-id="${meal.idMeal}">
      <img src="${meal.strMealThumb}" alt="food" />
      </div>
      <div class="meal-name" data-id="${meal.idMeal}">
     <h3>${meal.strMeal}</h3>
     <div class="modalIngredients"><p>Les ingrédients :<p>${ingredients}</div>
    `
    })
}
