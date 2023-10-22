<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

<script>
  const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', function () {
    if (nameInput.value.trim() === '') {
      nameOutput.textContent = 'Anonymous';
    } else {
      nameOutput.textContent = nameInput.value;
    }
  });
</script>
