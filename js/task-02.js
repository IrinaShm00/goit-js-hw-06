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


ingredients.map((ingredient) => {
const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  liElement.classList.add('item');
  ingredientsUl.appendChild(liElement);
});



