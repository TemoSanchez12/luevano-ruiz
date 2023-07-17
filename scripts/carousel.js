const buttons = document.querySelectorAll('[data-carousel-button]')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1
    const slides = button.closest('[carousel]').querySelector('[slides]')

    const activeSlide = slides.querySelector('[data-active-slide]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset

    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    const newActiveSlide = slides.children[newIndex]
    newActiveSlide.dataset.activeSlide = true
    delete activeSlide.dataset.activeSlide
  })
})
