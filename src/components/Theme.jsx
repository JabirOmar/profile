import React from 'react'
import { BsSun, BsMoonStars } from 'react-icons/bs'

const Theme = () => {

    const handleTheme = () => {
        let body = document.querySelector('body'),
        moon = document.getElementById('moon'),
        sun = document.getElementById('sun')

        body.classList.toggle('light')
        moon.classList.toggle('active')
        sun.classList.toggle('hide')
    }

  return (
    <div className=' flex justify-end items-center px-[30px] h-14 ' >
      <BsSun id='sun' className=' text-xl cursor-pointer ' onClick={handleTheme} />
      <BsMoonStars id='moon' className=' cursor-pointer' onClick={handleTheme} />
    </div>
  )
}

export default Theme
