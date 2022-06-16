import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/BannerSection'
import Team from './Components/TeamSection'
import Ads from './Components/AdsSection'
import Mint from './Components/MintSection'
import Footer from './Components/FooterSection'

function App() {
    return (
        <div className="flex flex-col items-center overflow-x-hidden w-[100%]">
           <Navbar/>
           <Banner/>
           <Team/>
           <Ads/>
           <Mint/>
           <Footer/>
        </div>
    )
}

export default App
