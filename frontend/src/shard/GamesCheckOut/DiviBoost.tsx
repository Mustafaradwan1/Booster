import { FormInformation } from '@/type/boosting';
import React, { useState } from 'react';
import DivisionBoosting from './DivisionBoosting';
import WinBoosting from './WinBoosting';
import PlacementMatches from './PlacementMatches';
import ChampionMastery from './ChampionMastery';
import DuoGames from './DuoGames';

const DiviBoost = ({ divi} : { divi: FormInformation }) => {
  const [activeService, setActiveService] = useState(divi.services[0].title);
    const data = divi?.services || []
    const rows = [];
    for (let i = 0; i < data.length; i += 3) {
      rows.push(data.slice(i, i + 3));
    }
      let activeInfo:
    | { head: string; p: string; p2?: string; }
    | null;
  switch (activeService) {
    case 'Division Boosting':
      activeInfo = divi.DivisionBoosting?.Info;
      break;
    case 'Win Boosting':
      activeInfo = divi.WinBoosting?.info;
      break;
    case 'Placement Matches':
      activeInfo = divi.PlacementMatches?.info;
      break;
    case 'Duo Games':
      activeInfo = divi.DueGames?.info;
      break;
    case 'Champion Mastery':
      activeInfo = divi.ChampionMastery?.info;
      break;
    default:
      activeInfo = null;
  }
  return ( 
    <div className="col-span-12 xl:col-span-9 bg-[#1c1f2b] rounded-2xl py-16 px-10">
        {activeInfo && (
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
              {activeInfo.head}
            </h2>
            <p className="mb-4">{activeInfo.p}</p>
            <p>{activeInfo.p2}</p>
          </div>
        )}
        <div className="space-y-[20px] mt-5">
          {rows.map((row, rowIndex) => {
            let gridCols = "grid-cols-1 md:grid-cols-3";
            if (row.length === 2) gridCols = "grid-cols-1 md:grid-cols-2"; 
            if (row.length === 1) gridCols = "grid-cols-1"; 
             return (
               <div
                key={rowIndex}
                 className={`grid ${gridCols} gap-[20px]`}
               >
                {row.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveService(item.title)}
                    className={`${activeService === item.title ? "bg-[var(--main-color)]" : "bg-[#242836]"} cursor-pointer text-white text-center py-6 rounded-lg font-semibold`}>
                    {item.title}
                   </div>
                ))}
              </div>
             );
           })}
        </div>
        <div className='grid grid-cols-12'>
          {activeService === "Division Boosting" && (
            <DivisionBoosting data={divi.DivisionBoosting} />
          )}
          {activeService === "Win Boosting" && (
            <WinBoosting data={divi.WinBoosting} />
          )}
          {activeService === "Placement Matches" && (
            <PlacementMatches data={divi.PlacementMatches} />
          )}
          {activeService === "Duo Games" && <DuoGames data={divi.DueGames} />}
          {activeService === "Champion Mastery" && (
            <ChampionMastery data={divi.ChampionMastery} />
          )}
        </div>
    </div>
  );
};

export default DiviBoost;
