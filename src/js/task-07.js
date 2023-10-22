<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>

<script>
  const fontSizeControl = document.getElementById('font-size-control');
  const textSpan = document.getElementById('text');

  fontSizeControl.addEventListener('input', function () {
    textSpan.style.fontSize = fontSizeControl.value + 'px';
  });
</script>
