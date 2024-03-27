import React from 'react'
// import "./ticketstyle.css";
type TicketData ={
  img : string,
  name : string,
  date : string,
  day : string,
  time : string,
  venue : string,
  buttonText : string
}

function Ticket(props:TicketData) {
  return (
    <div className='shadow-[0px_8px_16px_0px_#0000001A] h-[500px] bg-[#F7F7F8]'>
        <div className='dark:bg-[#3B3E47] p-3 w-[226.1px] bg-white'>
          <img src={props.img} className='w-[226.1px] h-[401.2px] shadow-[0px_8px_16px_0px_#00000033] '/>
        </div>

         <div className="dark:bg-[#3B3E47] relative h-[12px] border-t-[1px] border-dashed border-[#aaa]
                         before:content='' before:absolute before:h-[20px] before:w-[20px] before:rounded-full before:bg-[#e2e3e6] 
                         before:dark:bg-[#252f3c] before:top-[-9px] before:left-[-11px]
                         after:absolute after:h-[20px] after:w-[20px] after:rounded-full after:bg-[#e2e3e6] after:dark:bg-[#252f3c]
                         after:top-[-9px] after:right-[-11px]">

          </div>

        <div className='relative flex flex-col items-center justify-center bg-[#F7F7F8] w-[226px] dark:bg-[#3B3E47]'> 
            <div className='font-[500] text-[17px] leading-[26.52px] m-0 capitalize dark:text-white'>{props.name}</div>
            <div className='font-[400] text-[14px] leading-[21px] m-1 dark:text-white'>{props.date} | {props.day} | {props.time}</div>
            <p className='text-center font-sans font-[400] text-[13px] leading-[20.58px] text-[#525965] capitalize dark:text-[#DFDFDF]'>{props.venue}</p>
            <button className='bg-black text-white font-[500] text-[12.73px] leading-[15.41px] m-[10px] p-[10px_35px] capitalize'>{props.buttonText}</button>
        </div>
        
    </div>

      
  )
}

export default Ticket 

