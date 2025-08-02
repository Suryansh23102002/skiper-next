import React from 'react'
import { CardCarousel } from '../ui/card-carousel'

const CardCarouselParent = ()=> {
  const images = [
    {src: '/images/card1.jpg', alt: "Image 1"},
    {src: '/images/card2.jpg', alt: "Image 2"},
    {src: '/images/card3.jpg', alt: "Image 3"}
  ]
  return (
    <div>
      <CardCarousel images={images} />
    </div>
  )
}

export default CardCarouselParent
