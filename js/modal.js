(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();

(() => {
  const mob_menu = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[mobile-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[mobile-modal-close]'),
    // Додати атрибут mobile-menu-window на бекдроп модалки
    modal: document.querySelector('[mobile-menu-window]'),
  };

  mob_menu.openModalBtn.addEventListener('click', toggleModal);
  mob_menu.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    mob_menu.modal.classList.toggle('is-open');
  }
})();
