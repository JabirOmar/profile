import React, { useState } from 'react'
import { BsSun, BsMoonStars } from 'react-icons/bs'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

const Theme = () => {

    const [isVisible, setIsVisible] = useState(true)

    const handleTheme = () => {
        let body = document.querySelector('body'),
        moon = document.getElementById('moon'),
        sun = document.getElementById('sun')

        body.classList.toggle('light')
        moon.classList.toggle('active')
        sun.classList.toggle('hide')
    }

    const handleSideBar = () => {
      const SideBar = document.querySelector('.side-bar')
      const MainSection = document.querySelector('.main-section')
      const Theme = document.querySelector('.theme-wrapper')
      SideBar.classList.toggle('hide')
      MainSection.classList.toggle('wide')
      Theme.classList.toggle('wide')
    }

  return (
    <div className=' theme-wrapper fixed z-10 right-0 w-[calc(100%-300px)] flex justify-between items-center px-[30px] h-14 ' >

      <div>
        <HiOutlineMenuAlt2 className=' text-2xl' onClick={handleSideBar} />
      </div>

      <div>
        <BsSun id='sun' className=' text-xl cursor-pointer ' onClick={handleTheme} />
        <BsMoonStars id='moon' className=' cursor-pointer' onClick={handleTheme} />
      </div>
    </div>
  )
}

export default Theme
