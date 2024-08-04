import React from 'react'

// Hoc's
import DefaultlayoutHoc from '../layout/Default.layout'

// Components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component'
import PosterSlider from '../components/PosterSlider/PosterSlider.component'





const HomePage = () => {
  return (
    <div>HomePage</div>
  )
}

export default DefaultlayoutHoc(HomePage)