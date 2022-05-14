/* eslint-disable  */
const input = document.querySelector('#texto-tarefa');

// console.log(localStorage('texto', 'input'))
const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', () => {
  const texto = input.value;
  const item = document.createElement('li');
  item.innerText = texto;
  document.querySelector('#lista-tarefas').appendChild(item);
  item.className = 'item';
  input.value = '';
});

const gray = 'rgb(128, 128, 128)';

const selecionado = '';

const ol = document.querySelector('#lista-tarefas');

ol.addEventListener('click', (event) => {
  const item = event.target;
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
  }
  item.classList.add('selected');
});

ol.addEventListener('dblclick', (event) => {
  const item = event.target;
  if (item.classList.contains('completed')) {
    item.classList.remove('completed');
  } else {
    item.classList.add('completed');
  }
});

const buttonApagaTudo = document.querySelector('#apaga-tudo');

buttonApagaTudo.addEventListener('click', () => {
  const list = document.querySelector('#lista-tarefas').children;
  const array = [...list];
  array.forEach((item) => item.remove());
});

const buttonRemoveFinalizados = document.querySelector('#remover-finalizados');

buttonRemoveFinalizados.addEventListener('click', () => {
  const itemFinalizado = document.querySelectorAll('.completed');
  for (let i = 0; i < itemFinalizado.length; i++) {
    const task = itemFinalizado[i];
    task.remove();
  }
});
