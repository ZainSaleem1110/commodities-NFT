import React from 'react'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import Logo from '../assets/images/Logo.png'

function Navbar() {
    let mobileNav=()=>{
        let mobileView=document.querySelector(".mobileView").style
        mobileView.right="0px"
        mobileView.transition="2s"
    }
    let mobileNavClose=()=>{
        let mobileView=document.querySelector(".mobileView").style
        mobileView.right="-280px"
        mobileView.transition="2s"
    }
    return (
        <div className="w-[100%] relative">
        <div className="w-[100%]">
            <div className="w-[100%] flex justify-between items-center px-14 py-1">
                <img src={Logo} className="h-[70px]" alt="" />
            <div className="items-center justify-end md:flex hidden">
                <ul className="list-none flex items-center">
                    <li className=" text-[16px] font-medium"><a href="#home">Home</a></li>
                    <li className="ml-7 text-[16px] font-medium"><a href="#vision">Vision</a></li>
                    <li className="ml-7  text-[16px] font-medium"><a href="#NFT">NFT Drop</a></li>
                    <li className="ml-7 text-[16px] font-medium w-[232px] h-[47px] bg-[#35B8BE] text-white rounded-lg flex items-center justify-center"><a href="#connect">Connect Wallet</a></li>
                </ul>
            </div>
            <FaBars className="md:hidden flex text-[24px]" onClick={mobileNav}/>
        </div>
        </div>
        <div className="mobileView flex flex-col items-end justify-center pr-5 absolute top-130 z-40 bg-white p-5">
        <AiOutlineClose className="mr-4" onClick={mobileNavClose}/>
        <ul className="list-none flex flex-col items-center">
                    <li className="text-[16px] font-medium"><a href="#home">Home</a></li>
                    <li className="mt-3 text-[16px] font-medium"><a href="#vision">Vision</a></li>
                    <li className="mt-3 text-[16px] font-medium"><a href="#NFT">NFT Drop</a></li>
                    <li className="mt-3 text-[16px] font-medium w-[232px] h-[47px] bg-[#35B8BE] text-white rounded-lg flex items-center justify-center"><a href="#connect">Connect Wallet</a></li>
                </ul>
        </div>
        </div>
    )
}

export default Navbar
