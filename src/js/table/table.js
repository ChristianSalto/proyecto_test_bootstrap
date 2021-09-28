$('#filter').on('click', function (e) {
  e.preventDefault();
console.log('helooooooo.........');
});




const tbody = document.querySelector('tbody');
const tr = `
<tr>
  <td>Apple ING.</td>
  <td>Compra</td>
  <td>1000</td>
  <td>10/12/2020</td>
  <td>20:40</td>
  <td>pendiente</td>
  <td>190 EUR</td>
  <td>
    <a class="table__link" href="">Mas info</a>
  </td>
</tr>
`;


 for (let i = 0; i < 10; i++) {
     tbody.innerHTML += tr;
 }


