 // Seleciona todos os botões de aumentar e diminuir
  const decreaseButtons = document.querySelectorAll('.decrease');
  const increaseButtons = document.querySelectorAll('.increase');

  // Para cada botão de diminuir, adiciona o evento de clique
  decreaseButtons.forEach(button => {
    button.addEventListener('click', () => {
      // O input é o irmão (input) dentro do mesmo container (pai)
      const container = button.parentElement;
      const input = container.querySelector('.quantity');
      updateQuantity(input, -1);
    });
  });

  // Para cada botão de aumentar, adiciona o evento de clique
  increaseButtons.forEach(button => {
    button.addEventListener('click', () => {
      const container = button.parentElement;
      const input = container.querySelector('.quantity');
      updateQuantity(input, 1);
    });
  });

  function updateQuantity(input, change) {
    let currentValue = parseInt(input.value);
    const min = parseInt(input.min);
    const max = parseInt(input.max);

    let newValue = currentValue + change;

    if (newValue < min) newValue = min;
    if (newValue > max) newValue = max;

    input.value = newValue;
  }