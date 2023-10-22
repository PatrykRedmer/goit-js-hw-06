const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById('ingredients');

ingredients.forEach((ingredient) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(ingredient));
  li.classList.add('item');
  ul.appendChild(li);
});
