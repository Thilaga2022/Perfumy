import React from 'react'
import one from '../assets/images/one.jpg'
import two from '../assets/images/two.jpg'
import three from '../assets/images/three.jpg'
const Products = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', marginTop: '5vh', border: '1px solid #C27982', padding: '1em' }}>
            <img src={one} style={{ width: '10rem', height: '12rem' }}></img>
            <p style={{ marginTop: '2vh' }}>Fogg</p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '5vh', border: '1px solid #C27982', padding: '1em' }}>
            <img src={two} style={{ width: '10rem', height: '12rem' }}></img>
            <p style={{ marginTop: '2vh' }}>Queen</p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '5vh', border: '1px solid #C27982', padding: '1em' }}>
            <img src={three} style={{ width: '10rem', height: '12rem' }}></img>
            <p style={{ marginTop: '2vh' }}>Prada</p>
          </div>
        </div>
  )
}

export default Products
