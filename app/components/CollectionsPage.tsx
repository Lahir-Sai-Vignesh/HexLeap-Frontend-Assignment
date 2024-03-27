import React from 'react'
import Ticket from './Ticket'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function CollectionsPage() {

  return (
    <div className='relative flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 dark:from-gray-700 to-gray-200 dark:to-gray-800 h-[800px]'>

            <div className='font-[700] text-[50px] leading-[52.5px] w-[505px] h-[52px] mb-[19px] dark:text-[#FFFFFF] mt-[80px]'>Collection Spotlight</div>
            <p className= " text-center break-words font-normal text-[14px] leading-[22.65px] text-[#000000] text-wrap w-[917px] h-[46px] dark:text-[#FFFFFF]">
                Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
            </p>
        
        <div className='flex m-10 gap-5 h-[625px]'>
            <button className="border-[1px] border-solid border-[#2C9CF0] m-[250px_81.3px_288px_0] flex justify-center items-center w-[36.7px] h-[49px] ">
                <KeyboardArrowLeftIcon className="text-[#2C9CF0] text-[50px]"/>
            </button>

            <Ticket img="../Images/Bottom Block/A.jpg" 
                    name='las vegas aviators'  
                    date = "Oct 15" 
                    day="sun" 
                    time="4:30 P.M" 
                    venue='Las Vegas Ballpark, Las Vegas, Nevada' 
                    buttonText='take flight Collection'
            />
            
            <Ticket img="../Images/Bottom Block/B.jpg" 
                    name='sacramento river cats'  
                    date = "Oct 15" 
                    day="sun" 
                    time="4:30 P.M" 
                    venue='Sutter Health Park, Sacramento, California' 
                    buttonText='Orange Collection'
            />

            <Ticket img="../Images/Bottom Block/A.jpg" 
                    name='las vegas aviators'  
                    date = "Oct 15" 
                    day="sun" 
                    time="4:30 P.M" 
                    venue='Las Vegas Ballpark, Las Vegas, Nevada' 
                    buttonText='take flight Collection'
            />
            
            <button className="border-[1px] border-solid border-[#2C9CF0] m-[250px_0px_288px_81.3px] flex justify-center items-center w-[36.7px] h-[49px] ">
                <KeyboardArrowRightIcon className="text-[#2C9CF0] text-[50px]"/>
            </button>
        </div>
    </div>
  )
}

export default CollectionsPage;

