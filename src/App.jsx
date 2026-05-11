

import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Nav from './Components/Nav/Nav'
import Stats from './Components/Stats/Stats'
import GetStared from './Components/GetStarted/GetStared'
import Pricing from './Components/Pricing/Pricing'
import Explore from './Components/Explore/Explore'

const fetchData = async () => {
  const res = await fetch("/data.json")
  
  return res.json();
}
function App() {
  const DataPromise = fetchData();
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Nav cartItems={cartItems}></Nav>
      <Banner></Banner>
      <Stats></Stats>
      <DigitalTools DataPromise={DataPromise} cartItems={cartItems} setCartItems={setCartItems}></DigitalTools>
      <GetStared></GetStared>
      <Pricing></Pricing>
      <Explore></Explore>
    </>
  )
}

export default App
