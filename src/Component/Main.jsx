/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'

import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <>
   
 <Header/>
    <div>
        <Outlet />
    </div>
    </>
  )
}

export default Main
