import React from 'react'

function Mint() {
    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="sm:text-[42px] text-[32px] font-bold">How to Mint.</h1>
            <div className="py-14 flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col gap-x-20">
            <div className="flex flex-col items-center sm:w-[365px] w-[250px]">
                <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#35B8BE] rounded-full text-white text-[20px] font-bold">1</div>
            <h1 className="text-[24px] font-bold mt-5">Connect your Wallet</h1>
            <p className="text-[18px]  text-center leading-tight mt-4 w-[291px]">Click “Connect Wallet” to connect your wallet to the browser.</p>
            </div>
            <div className="flex flex-col items-center sm:w-[365px] w-[250px] md:mt-0 mt-10">
                <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#35B8BE] rounded-full text-white text-[20px] font-bold">2</div>
            <h1 className="text-[24px] font-bold mt-5 text-center">Choose the Commodity to mint</h1>
            <p className="text-[18px] text-center leading-tight mt-4 w-[291px]">Choose the Commodity.NFT you’d like to mint</p>
            </div>
            <div className="flex flex-col items-center sm:w-[365px] w-[250px] lg:mt-0 mt-10">
                <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#35B8BE] rounded-full text-white text-[20px] font-bold">3</div>
            <h1 className="text-[24px] font-bold mt-5">Mint</h1>
            <p className="text-[18px] text-center leading-tight mt-4 w-[291px]">Click “Mint” and confirm the transaction on your wallet to mint your Commodity.NFT</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Mint
