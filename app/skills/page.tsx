'use client'
import React from 'react'
import Frontend from '../components/Frontend'
import Backend from '../components/Backend'
import Cloud from '../components/Cloud'

import Databases from '../components/Databases'
import Other from '../components/Other'


function Home() {
  return (
    <div className='absolute my-20 w-full'>
        <Frontend></Frontend>
        <Backend></Backend>
        <Databases></Databases>
        <Other></Other>
        <Cloud></Cloud>
    </div>
  )
}

export default Home