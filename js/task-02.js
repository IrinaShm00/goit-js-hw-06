const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElements = document.getElementById('ingredients'); 
console.log(ulElements);
ingredients.forEach(ingredientText => {
  const liElement = document.createElement('li');
  liElement.textContent = ingredientText;
  liElement.classList.add('item');
  ulElements.append(liElement);
  // console.log(ulElements);
});

