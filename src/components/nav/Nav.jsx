import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookshelf} from 'react-icons/bs'
import {GiBookshelf} from 'react-icons/gi'
import {FcContacts} from 'react-icons/fc'
// import {useState} from 'react'

const Nav = () => {

  return (
    <nav>
      
       <a href=" #  " className='active'><AiOutlineHome/>  </a>
      <a href="  #about"  className='active'> <AiOutlineUser/> </a>
      <a href=" #experience  "   className='active'> <BsBookshelf/> </a>
      <a href=" #services "   className='active'><GiBookshelf/>  </a>
      <a href="  #contact "  className='active' > <FcContacts/> </a>

    </nav>
  )
}

export default Nav