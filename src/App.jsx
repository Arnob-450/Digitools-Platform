

import './App.css'
import Banner from './Components/Banner/Banner'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Nav from './Components/Nav/Nav'
import Stats from './Components/Stats/Stats'

const fetchData = async () => {
  const res = await fetch("/data.json")
  
  return res.json();
}
function App() {
  const DataPromise = fetchData();
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Stats></Stats>
      <DigitalTools DataPromise={DataPromise}></DigitalTools>
    </>
  )
}

export default App
