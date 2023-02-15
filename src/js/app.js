document.querySelector('#menu__toggle').addEventListener('change', function (e) {
  document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
});