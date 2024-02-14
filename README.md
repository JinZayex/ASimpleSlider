<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Counter</title>
</head>
<body>

<h1>Counter</h1>

<div id="counterDisplay">0</div>
<button id="incrementButton">Increment</button>

<script>
  // Ottieni riferenze agli elementi del DOM
  const counterDisplay = document.getElementById('counterDisplay');
  const incrementButton = document.getElementById('incrementButton');

  let counter = 0;

  // Aggiungi un gestore di eventi al bottone per incrementare il contatore
  incrementButton.addEventListener('click', function() {
    counter++;
    counterDisplay.textContent = counter;
  });
</script>

</body>
</html>
