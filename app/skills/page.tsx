import React from 'react'
import Frontend from '../components/Frontend'
import Backend from '../components/Backend'


function Home() {
  return (
    <div className='absolute mt-20 w-full'>
        <Frontend></Frontend>
        <Backend></Backend>
    </div>
  )
}

export default Home