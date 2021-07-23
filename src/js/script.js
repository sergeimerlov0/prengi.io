const humburger = document.querySelector('.humburger'),
      cup = document.querySelector('.cup__title'),
      text = document.querySelectorAll('.cup__title_text');

      humburger.addEventListener('click', () => {
        humburger.classList.toggle('humburger__active');
        cup.classList.toggle('cup__title_active');
      });

      text.forEach(item => {
        item.addEventListener('click', () => {
            humburger.classList.toggle('humburger__active');
            cup.classList.toggle('cup__title_active');
        });
      });

//modal
const modal = document.querySelector('.modal'),
      btns = document.querySelector('.btn1'),
      btn2 = document.querySelector('.button_main'),
      clos = document.querySelector('.modal__close');

btns.addEventListener('click', () => {
  modal.style.display = 'block';
});

clos.addEventListener('click', () => {
  modal.style.display = 'none';
});