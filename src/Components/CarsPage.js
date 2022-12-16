import React from 'react'
import TopMenu from './TopMenu'
import CarsBottomZone from './BottomComponents/CarsBottomZone'
import CarsWorkingZone from './WorkingComponents/CarsWorkingZone'

function CarsPage() {
  return (
    <>
      <TopMenu/>
      <CarsWorkingZone/>
      <CarsBottomZone/>
    </>
  )
}

export default CarsPage
