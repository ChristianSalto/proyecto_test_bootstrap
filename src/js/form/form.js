// const conn =  require('../../db/db_connection');
// import {conn} from '../../db/db_connection.js';

// console.log(conn)

const { formTest } = document;
const datos = document.getElementsByClassName('datos');

console.log(datos);

formTest.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(formTest);
  const serializeData = {};
  let span = '';

  for (const [name, value] of data) {
    serializeData[name] = value;

    span += `<p class="text-info bg-dark mb-0">${value}</p><br>`;
  }

  datos[0].innerHTML = span;

  console.log();

  //*****  jquery  *****//
  // const d = $('#form-test').serializeArray().filter(e => e.value)
});

//*****  form filter  *****//

const btnFilter = document.getElementById('btn-filter');
const cntrForm = document.getElementById('cntr-form');
const popup = document.getElementById('popup');
const cerrarPopup = document.getElementById('cerrar-popup');

btnFilter.addEventListener('click', function (e) {
  e.preventDefault();
  cntrForm.classList.add('active');
  popup.classList.add('active');
});

cerrarPopup.addEventListener('click', function (e) {
  e.preventDefault();
  cntrForm.classList.remove('active');
  popup.classList.remove('active');
});

document.querySelectorAll('.form__button--item').forEach((item) => {
  item.addEventListener('click', (event) => {
    item.classList.contains('active')
      ? item.classList.remove('active')
      : item.classList.add('active');
  });
});
