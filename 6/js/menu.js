document.addEventListener('DOMContentLoaded', () => {
  const navigationMenu = document.querySelector('.page-header__navigation')
  const menuToggleButton = document.querySelector('.page-header__navigation-toggle')

  function toggleMenu() {
    navigationMenu.classList.toggle('page-header__navigation--open')
    menuToggleButton.classList.toggle('burger-menu--open')
  }

  menuToggleButton.addEventListener('click', toggleMenu)
})
