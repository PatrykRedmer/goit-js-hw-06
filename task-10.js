<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

<script>
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  const controls = document.getElementById('controls');
  const createButton = controls.querySelector('button[data-create]');
  const destroyButton = controls.querySelector('button[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', () => {
    const amount = +document.querySelector('#controls input').value;
    createBoxes(amount);
  });

  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    let boxSize = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = boxSize + 'px';
      box.style.height = boxSize + 'px';
      box.style.backgroundColor = getRandomHexColor();
      box.style.marginBottom = '10px';
      boxesContainer.appendChild(box);
      boxSize += 10;
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
</script>
