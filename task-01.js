<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>

<script>
  const categories = document.querySelectorAll("#categories .item");
  const numberOfCategories = categories.length;
  console.log("Number of categories: " + numberOfCategories);

  categories.forEach((category) => {
    const categoryName = category.querySelector("h2").innerText;
    const elements = category.querySelectorAll("ul li");
    const numberOfElements = elements.length;
    console.log("Category: " + categoryName);
    console.log("Elements: " + numberOfElements);
  });
</script>

</body>
</html>
