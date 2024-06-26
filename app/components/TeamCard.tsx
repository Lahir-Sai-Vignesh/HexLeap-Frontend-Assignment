import React from 'react';

type TeamCardProps = {
    teamName: string;
    totalEvents: number;
    sportType: string;
    imageUrl: string;
  }

function TeamCard({teamName, totalEvents, sportType, imageUrl}:TeamCardProps ) {
  return (
    <div className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)] bg-[#FFFFFF] relative flex flex-col p-[10px_10.1px_10px_10.1px] dark:bg-[#3B3E47] ">
     
      <img src={imageUrl} alt={teamName} className="m-[0_0_14.6px_0] w-[218.4px] h-[385.4px]" />

      <div className="m-[0_0_16px_0] inline-block self-start break-words font-medium text-[17px] capitalize text-[#000000] dark:text-white">
        {teamName}
      </div>


      <div className="rounded-[2px] relative flex flex-row justify-between p-[12px_0_4px_10.1px] w-[218.4px] bg-[#F7F7F8] dark:bg-[#292B32]">
        
        <div className="flex flex-col items-center ">
          <div className="m-[0_0_6px_0] inline-block break-words font-normal text-[12px] capitalize text-[#525965] dark:text-white ">
            total events
          </div>
          <span className="m-[0_2.4px_0_0] break-words font-medium text-[14px] capitalize text-[#000000] dark:text-white">
            {totalEvents} Events
          </span>
        </div>

        <div className="flex flex-col ">
          <div className="m-[0_0_6px_0] inline-block self-start break-words font-normal text-[12px] capitalize text-[#525965] dark:text-white">
            sport
          </div>
          <span className="break-words font-medium text-[14px] capitalize text-[#000000] dark:text-white">
            {sportType}
          </span>
        </div>

      </div>
    </div>
  );
};

export default TeamCard;

