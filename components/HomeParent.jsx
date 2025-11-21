import React from 'react'
import About from './About'
import Articles from './Articles'

export default function HomeParent() {
  return (
    <div className='container mx-auto'>
      <About/>
      <Articles/>
    </div>
  )
}
