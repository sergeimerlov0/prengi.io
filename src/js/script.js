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