import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from 'images/logolight_6a1aa11598dc344d1ac0495347ece381.png'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to MARKET Protocol</h1>
    <img src={logoImg} alt="" />
  </div>
))
