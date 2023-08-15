import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { HiArrowDown } from 'react-icons/hi'
import { useState } from 'react'
import { Link } from 'react-scroll'

export default function Home() {

  const [arrow, Setarrow] = useState(false)
  const handelclick = () => Setarrow(!arrow)

  return (
    <div name='home' className='w-full  h-screen bg-slate-900'>

      {/*kapsayici */}
      <div className='text-gray-300   max-w-[1000px] justify-center h-full px-8 mx-auto flex flex-col  '>

        <h1 className=''>Hi My Name is,</h1>
        <h2 className='text-logobrand text-4xl'>Muhammed İzzet DEMİR</h2>
        <br />
        <p className='pb-10 font-semibold'>

          I am a 3rd year computerengineering student at Gazi University.<br /> I am a person whohas knowledge of HTML,
          CSS and JavaScript and has developed interfaces,<br /> Open to learning new things, research and
          development, prone to teamwork, paying attention to details. <br />

        </p>
        <div className=''>
        <button className='text-black w-[140px] font-semibold  text-lg bg-logobrand flex flex-row gap-x-2 justify-center items-center duration-300 h-full hover:bg-slate-900 hover:text-logobrand ' >  { <HiArrowRight className='hover:rotate-90'/> } Go to Work </button>
         
        </div>
      </div>






    </div>
  )
}
