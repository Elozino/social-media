import React from 'react'
import "./LogoSearch.css"
import * as Icon from "@iconscout/react-unicons"

import Logo from "../../assets/images/logo.png"

const LogoSearch = () => {
  return (
    <div className='logoSearch'>
      <img src={Logo} alt="logo-image" />
      <div className="logoSearch__search">
        <input type="text" name="" id="" placeholder='#Explore' />
        <div className="logoSearch__s-icon">
          <Icon.UilSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch