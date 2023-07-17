const sliders = document.querySelector('.wine-experience__slider-box')
const rightButtonElement = document.querySelector(
  '.wine-experience__right-button'
)
const leftButtonElement = document.querySelector(
  '.wine-experience__left-button'
)

let scrollPerClick = sliders.firstElementChild.clientWidth + 30
let scrollAmount = 0

const sliderScrollLeft = () => {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: 'smooth',
  })

  if (scrollAmount < 0) scrollAmount = 0
}

const sliderScrollRight = () => {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: 'smooth',
    })
  }
}

leftButtonElement.addEventListener('click', sliderScrollLeft)
rightButtonElement.addEventListener('click', sliderScrollRight)
