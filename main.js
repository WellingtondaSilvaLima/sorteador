function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  let inicio = document.getElementById('inicio').value;
  let fim = document.getElementById('fim').value;

  let numeroSorteado = getRandomInt(inicio, fim);

  let resultado = document.getElementById('resultado');

  resultado.style.display = 'flex';
  resultado.style.justifyContent = 'center';
  resultado.style.alignItems = 'center';

  resultado.innerHTML = `<p>Número Sorteado: ${numeroSorteado}</p>`
})
