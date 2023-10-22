<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

<script>
  let counterValue = 0;
  const valueSpan = document.getElementById('value');

  const decrementButton = document.querySelector('button[data-action="decrement"]');
  const incrementButton = document.querySelector('button[data-action="increment"]');

  decrementButton.addEventListener('click', function () {
    counterValue--;
    valueSpan.textContent = counterValue;
  });

  incrementButton.addEventListener('click', function () {
    counterValue++;
    valueSpan.textContent = counterValue;
  });
</script>
