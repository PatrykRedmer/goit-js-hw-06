<style>
  #validation-input {
    border: 3px solid #bdbdbd;
  }

  #validation-input.valid {
    border-color: #4caf50;
  }

  #validation-input.invalid {
    border-color: #f44336;
  }
</style>

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

<script>
  const input = document.getElementById('validation-input');

  input.addEventListener('blur', function () {
    const dataLength = parseInt(input.getAttribute('data-length'));
    const inputLength = input.value.length;

    if (inputLength === dataLength) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  });
</script>
