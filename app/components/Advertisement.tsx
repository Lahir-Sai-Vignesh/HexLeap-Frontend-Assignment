import React from 'react'

function Advertisement() {
  return (
    <div className="shadow-[0px_4px_8px_0px_#0000000D] bg-[#FFFFFF]  flex flex-col items-center justify-center p-[8px_10px] w-[238.5px] ">
      
      <div className=' border-solid border-[0.2px] border-[#006555] '>
          
      <div className="relative m-[0_0_20px_0]">
        <img src="../Images/Top block/5.jpg"  alt="Ad Image" />
        <div className="absolute top-0 right-0 bg-black text-[#FFFFFF] font-sans font-[700] text-[12.8px] p-[3px_15px_3px_15px]">
          Ad
        </div>
      </div>

          <div className='flex flex-col justify-center items-center box-border'>
          <div className=" inline-block break-words font-semibold text-[20px] text-[#222D3A]">
            Advertisement title
          </div>
          <div className="m-[0.2rem_0.8rem_2rem_0.8rem] p-1 break-words font-normal text-[12.8px] leading-[19px] text-[#525965]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          </div>

      </div>

    </div>
  )
}

export default Advertisement