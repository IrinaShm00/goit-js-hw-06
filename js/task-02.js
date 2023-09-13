const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsUl = document.getElementById('ingredients');
// console.log(ingredientsUl);


// ingredients.forEach((ingredient) => {
//   const liHtml = `<li class="item">${ingredient}</li>`;
//   ingredientsUl.insertAdjacentHTML('beforeend', liHtml); 
// });

const ingredientsUl = document.getElementById('ingredients');

const liElements = ingredients.map((ingredient) => {
  const liElement = document.createElement('li');
  console.log(liElement);
  liElement.textContent = ingredient;
  liElement.classList.add('item');
  ingredientsUl.insertAdjacentHTML('beforeend', `<li class="item">${ingredient}</li>`);
});
