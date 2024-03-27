import React from 'react';
import TeamCard from './TeamCard';
import Advertisement from './Advertisement';

function SportsPage() {
  return (

    <div>
        {/* {heading} */}
        
        <div className="mb-[20px] inline-block leading-9 font-bold text-[24px] text-[#000000] border-b-2 border-[#738FFF] dark:text-white">
          Sports
        </div>
        {/* teamcards ,adv and seemore */}
      <div className='flex flex-col justify-center items-center'>
        {/* Team Cards */}
          <div className="flex gap-[1rem]">
        
            <TeamCard teamName="Sacramento River Cats" totalEvents={48}
                      sportType="baseball" imageUrl = "../Images/Top block/1.jpg" />
            <TeamCard teamName="Las Vegas Aviators" totalEvents={28}
                      sportType="baseball" imageUrl="../Images/Top block/2.jpg" />

            <TeamCard teamName="New Jersey Devils" totalEvents={15}
                      sportType="ice hockey"imageUrl="../Images/Top block/3.jpg" />
            <TeamCard teamName="Las Vegas Aviators" totalEvents={28}
                      sportType="baseball"imageUrl="../Images/Top block/2.jpg"/>

            <Advertisement />
          </div>

          {/* See more button */}
          <button className="shadow-[0px_4px_8px_0px_ #0000000D] rounded-[3px] bg-[#2C9CF0] m-[30px] flex justify-center self-center p-[10px_30px_10px_30px] w-[124.8px] ">
            <span className="font-semibold text-[14px]  text-[#FFFFFF]">
               See More
            </span>
          </button>

      </div>

    </div>
    
  )
}

export default SportsPage

