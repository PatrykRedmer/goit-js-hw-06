<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

<script>
  const form = document.querySelector('.login-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;

    if (emailValue === '' || passwordValue === '') {
      alert('All fields must be filled out');
    } else {
      const formData = {
        email: emailValue,
        password: passwordValue,
      };
      console.log(formData);
      form.reset();
    }
  });
</script>


