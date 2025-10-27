import GamesCheckOut from '@/shard/GamesCheckOut/GamesCheckOut'
import lol from "../../../..//public/gamesCheckOut/lol.webp"
import iron from "../../../../public/gamesCheckOut/division/iron.png"
import bronze from "../../../../public/gamesCheckOut/division/bronze.png"
import silver from "../../../../public/gamesCheckOut/division/silver.png"
import gold from "../../../../public/gamesCheckOut/division/gold.png"
import platinum2 from "../../../../public/gamesCheckOut/division/platinum2.png"
import emeralda from "../../../../public/gamesCheckOut/division/emerald.png"
import diamond from "../../../../public/gamesCheckOut/division/diamond.png"
import master from "../../../../public/gamesCheckOut/division/master.png"
const LeagueOfLegends = () => {

    const information = {
        title:"League of Legends",
        span:"Boosting",
        p:"World class League of Legends net win boosting from Turboboost, we work with the top 0.1% of players in the ranked ladders on every region.",
        img:lol
    }
    const formInformation = {
      services:[
        {title:"Division Boosting",icon:""},
        {title:"Win Boosting",icon:""},
        {title:"Placement Matches",icon:""},
        {title:"Duo Games",icon:""},
        {title:"Champion Mastery",icon:""}
      ],
      DivisionBoosting:{
          Info:{
            head:"Rank Boosting for League of Legends",
            p:"Here you can configure your preferences for your boosting order.",
            p2:"Your order can get adjusted if the LP gains are incorrect or it decreases during the process.",
          },
          DivisionBoostingBox:[
              {
                title:"desired rank",
                p:"please select your rank and division.",
                rank:["lV","lll","ll","l"],
                imgs:[iron, bronze, silver, gold, platinum2, emeralda, diamond, master]
              },
              {
                title:"starting rank",
                p:"please select your rank and division.",
                rank:["lV","lll","ll","l"],
                imgs:[iron, bronze, silver, gold, platinum2, emeralda, diamond, master]
              },
          ], 
          selectOptions:[
            {title:"Queue Type",select:["Solo Due","Flex"]},
            {title:"Region",select:["Select Region","Europe West","North America","Brazil"]},
            {title:"Current LP",select:["Select Lp","0-20","21-40","41-60","61-80","81-100"]},
            {title:"LP Gain",select:["Select Gain","5-10","11-14","15-17","18-20","21-24","25-28","29-31","31-34","35+"]},
          ],
          Addons:[
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
          ]
      },
      WinBoosting :{
          info:{
            head:"Net Win Boosting for League of Legends",
            p:"Here you can configure your preferences for your boosting order.",
            p2:"In Net Win Orders for each new division in Diamond+ we consider -1 win."
          },
          WinBoostingBox:{
            title:"current rank",
            p:"please select your rank and division.",
            rank:["lV","lll","ll","l"],
            imgs:[iron, bronze, silver, gold, platinum2, emeralda, diamond, master],
            select:[1,2,3,4,5]
          },
          selectOptions:[
            {title:"Queue Type",select:["Solo Due","Flex"]},
            {title:"Region",select:["Select Region","Europe West","North America","Brazil"]},
            {title:"LP Gain",select:["Select Gain","5-10","11-14","15-17","18-20","21-24","25-28","29-31","31-34","35+"]},
          ],
          Addons:[
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"use vbn",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"solo due",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
          ]
      },
      PlacementMatches :{
            info:{
            head:"Placements Boosting for League of Legends",
            p:"Here you can configure your preferences for your boosting order.",
            p2:"We guarantee 80% Winrate for placements up to Emerald, for Diamond+ its 70%."
          },
          PlacementMatchesBox:{
            title:"last season rank ",
            p:"please select your rank and division.",
            rank:["lV","lll","ll","l"],
            imgs:[iron, bronze, silver, gold, platinum2, emeralda, diamond, master],
            select:[1,2,3,4,5]
          },
        
          selectOptions:[
            {title:"Queue Type",select:["Solo Due","Flex"]},
            {title:"Region",select:["Select Region","Europe West","North America","Brazil"]},
          ],
        
          Addons:[
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"use vbn",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"solo due",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
          ]
      },
      DueGames :{
                  info:{
            head:"Duo Games for League of Legends",
            p:"Here you can configure your preferences for your boosting order.",
            p2:"In Duo Games Losses do not count as an extra wins, we will play only number of games you purchased if you prefer guaranteed Wins you should use Win Boosting method."
          },
        
        
          DueGamesBox:{
            title:"current rank ",
            p:"please select your rank and division.",
            imgs:[iron, bronze, silver, gold, platinum2, emeralda, diamond, master],
            select:[1,2,3,4,5],
            dueType:[
              {       
                span:"base due ",
                title:"(play with a master+ booster) ",
                price:"3.00$/game"
              },
              {       
                span:"base due ",
                title:"(play with a master+ booster) ",
                price:"3.00$/game"
              },
              {       
                span:"base due ",
                title:"(play with a master+ booster) ",
                price:"3.00$/game"
              }
            ]
          },
        
        
          selectOptions:[
            {title:"Queue Type",select:["Solo Due","Flex"]},
            {title:"Region",select:["Select Region","Europe West","North America","Brazil"]},
          ],
        
        
          Addons:[
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"use vbn",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"solo due",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
          ]
        
      },
      ChampionMastery: {
            info:{
            head:"Champion Mastery Boosting for League of Legends",
            p:"Here you can configure your preferences for your boosting order.",
            p2:"Unlock Mastery 7 for your favorite champion and flex on your enemies and friends!"
          },
          ChampionMasteryBox:[
            {
              title:"current mastery ",
              p:"select your current level",
              imgs:[iron, bronze, silver, gold, platinum2, emeralda, diamond, master],
            },
            {
              title:"Desiered mastery ",
              p:"select your Desiered level",
              imgs:[iron, bronze, silver, gold, platinum2, emeralda, diamond, master],
            }
          ],
          selectOptions:[
            {title:"Region",select:["Select Region","Europe West","North America","Brazil"]},
          ],
          Addons:[
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"use vbn",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"solo due",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
            {icon:"",title:"due boosting",dis:"70%"},
          ]
      },
    }
  return (
    <div>
        <GamesCheckOut information={information} formInformation={formInformation} />
    </div>
  ) 
}

export default LeagueOfLegends