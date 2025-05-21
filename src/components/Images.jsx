import React from 'react'
import CircularGallery from '../../circular-animation/CircularGallery/CircularGallery'

function Images() {
  return (
        <div className='Images'>
            <h1>Where Culture Becomes Jewellery</h1>
            <CircularGallery bend={-1} textColor="#00000" borderRadius={0.15} disableScroll={false} backgroundColor="white" />
        </div>
  )
}

export default Images