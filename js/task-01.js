const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
console.log('Number of categories:', categoryItems.length);
const categoryTitle = document.querySelectorAll('ul#categories, li.item');

categoryItems.forEach(function(item) {
    const titleElement = item.querySelector('h2');
    const listItems = item.querySelectorAll('ul li');
    const titleText = titleElement.textContent;
    const categoryListItems = listItems.length;

    console.log('Category:', titleText);
    console.log(`Elements: ${categoryListItems}`);
});
