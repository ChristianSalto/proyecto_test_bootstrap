const liveToastBtn = document.querySelector('#liveToastBtn');
liveToastBtn.addEventListener('click', () => {
  $('#liveToast').toast('show');
});

var toastElList = [].slice.call(document.querySelectorAll('.toast'));
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl);
});

var myToastEl = document.getElementById('myToast');
myToastEl.addEventListener('click', function (evt) {
 
  setTimeout(() => {
    $('#myToast').removeClass('hide');
    $('#myToast').addClass('show');
  }, 6000);
  
});

// var myToastEl = document.getElementById('myToast')
// myToastEl.addEventListener('hidden.bs.toast', function () {
//     setTimeout(() => {
//         $("#myToast").toast('show');
//     }, 2000);
//   // do something...
// })
