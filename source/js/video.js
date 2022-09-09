document.addEventListener('DOMContentLoaded', () => {
  const imageContainer = document.querySelector('.production__image-container')
  const videoContainer = document.querySelector('.production__video-container')

  imageContainer.addEventListener('click', () => {
    videoContainer.classList.remove('visually-hidden')
  })
})
