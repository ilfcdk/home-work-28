import SwipeCarousel from './carousel/index.js'

const carouselConfig = {
  containerId: '#carousel',
  slideId: '.slide',
  interval: 3000,
  isPlaying: true,
  pauseOnHover: true
}

const carousel = new SwipeCarousel(carouselConfig)

carousel.init()

export default carousel
