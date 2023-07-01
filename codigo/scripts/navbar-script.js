const menuBtn = document.querySelector('.menu-icon');
const menuBtnIcon = document.querySelector('.menu-icon i');
const dropDownMenu = document.querySelector('.dropdown-menu');

// Função de clique do botão de menu
menuBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  menuBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}