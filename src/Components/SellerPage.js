import React from 'react'
import TopMenu from './TopMenu'
import SellersBottomZone from './BottomComponents/SellersBottomZone'
import SellersWorkingZone from './WorkingComponents/SellersWorkingZone'


function SellerPage() {
  return (
    <>
      <TopMenu/>
      <SellersWorkingZone/>
      <SellersBottomZone/>
    </>
  )
}

export default SellerPage
