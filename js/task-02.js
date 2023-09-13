const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.getElementById('ingredients');
console.log(ingredientsUl);


ingredients.forEach((ingredient) => {
  const liHtml = `<li class="item">${ingredient}</li>`;
  ingredientsUl.insertAdjacentHTML('beforeend', liHtml);
});


