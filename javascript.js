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

// FAZER MODIFICAS AS SESSOES SO SELECIONAR UMA CATEGORIA

const classcomida = document.querySelector('.cat-comidas');
const classsucos = document.querySelector('.cat-sucos');
const classlanches = document.querySelector('.cat-lanches');

// ESTADO INICIAL DO BANNER
  const classSucos = document.querySelector('.banner-sucos');
  const classLanche = document.querySelector('.banner-lanches');
  const classPratos = document.querySelector('.banner-pratos');
  classSucos.style.display = "none";
  classLanche.style.display = "none";

classcomida.addEventListener('click', function () {
  const classSucos = document.querySelector('.banner-sucos');
  const classLanche = document.querySelector('.banner-lanches');
  const classPratos = document.querySelector('.banner-pratos');
  classSucos.style.display = "none";
  classLanche.style.display = "none";
  classPratos.style.display = "block";

});

classsucos.addEventListener('click', function () {
  const classPratos = document.querySelector('.banner-pratos');
  const classLanche = document.querySelector('.banner-lanches');
  const classSucos = document.querySelector('.banner-sucos');
  classPratos.style.display = "none";
  classLanche.style.display = "none";
  classSucos.style.display = "block";
});

classlanches.addEventListener('click', function () {
  const classSucos = document.querySelector('.banner-sucos');
  const classPratos = document.querySelector('.banner-pratos');
  const classLanches = document.querySelector('.banner-lanches');
  classSucos.style.display = "none";
  classPratos.style.display = "none";
  classLanches.style.display = "block";
});