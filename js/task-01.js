// Знаходимо список категорій
const categoriesList = document.querySelector('#categories');

// Знаходимо всі елементи li.item у списку категорій
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій в консоль
console.log(`Number of categories: ${categoryItems.length}`);

// Ітеруємося по кожному елементу li.item
categoryItems.forEach((categoryItem) => {
  // Знаходимо заголовок категорії (тег h2)
  const categoryTitle = categoryItem.querySelector('h2');

  // Знаходимо всі елементи li в даній категорії
  const listItems = categoryItem.querySelectorAll('ul li');

  // Виводимо інформацію про категорію і її кількість елементів в консоль
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${listItems.length}`);
});









