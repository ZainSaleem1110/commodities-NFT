import React from 'react'
import {BsTwitter , BsInstagram} from 'react-icons/bs'
import Discord from '../assets/images/Vector.png'
import Logo from '../assets/images/Logo.png'

function Footer() {
    return (
        <div className="w-[100%] bg-[#F5FBFC] sm:px-14 px-5 py-5">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-start items-center">
            <img src={Logo} className="h-[70px]" alt="" />
                <ul className="list-none w-[50%] sm:pl-32 sm:block flex flex-col items-center sm:mt-0 mt-10">
                    <li className=" text-[16px] font-medium"><a href="#home">Home</a></li>
                    <li className="text-[16px] mt-3 font-medium"><a href="#vision">Vision</a></li>
                    <li className="text-[16px] mt-3 font-medium"><a href="#NFT">NFT Drop</a></li>
                    <li className="text-[16px] mt-3 font-medium"><a href="#funding">Funding</a></li>
                </ul>
            </div>
                <div className="bg-[#1E6C70] w-[100%] h-[2px] mt-5"></div>
                <div className="flex md:justify-end justify-center">
                <div className="flex md:flex-row flex-col md:justify-between items-center md:w-[60%] w-[90%]">
                    <h1 className="text-[#35B8BE] sm:text-[24px] text-[16px] font-bold my-5">A Seven21 Club Project</h1>
                    <ul className="flex items-center md:justify-end justify-center">
                        <li><a href="#decord">
                            <div className="w-[36px] h-[36px] border border-[#35B8BE] rounded-full flex justify-center items-center"><img src={Discord} className="w-[15px] h-[15px]" alt=""/></div>    
                        </a></li>
                        <li className="ml-3"><a href="#twitter">
                            <div className="w-[36px] h-[36px] border border-[#35B8BE] rounded-full flex justify-center items-center"><BsTwitter/></div>     
                        </a></li>
                        <li className="ml-3"><a href="#insta">
                            <div className="w-[36px] h-[36px] border border-[#35B8BE] rounded-full flex justify-center items-center"><BsInstagram/></div> 
                        </a></li>
                    </ul>
                </div>
                </div>
        </div>
    )
}

export default Footer
