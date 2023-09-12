const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelector('li.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoriesItems.forEach((categoryItem) => {
    const categorieTitle = categoriesItems.querySelector('h2');
    const listItem = categorieTitle.querySelector('ul li');

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${listItems.length}`);
});


