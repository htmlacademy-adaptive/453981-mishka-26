const VISUALLY_HIDDEN = 'visually-hidden'

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal')
  const modalCloseButton = document.querySelector('.modal__close-button')
  const offersOrderButton = document.querySelector('.offers__order-button')

  function openModal() {
    modal.classList.remove(VISUALLY_HIDDEN)

    modalCloseButton.addEventListener('click', closeModal)
  }

  function closeModal() {
    modal.classList.add(VISUALLY_HIDDEN)

    modalCloseButton.removeEventListener('click', openModal)
  }

  offersOrderButton.addEventListener('click', openModal)
})
