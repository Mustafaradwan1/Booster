import GamesCheckOut from '@/shard/GamesCheckOut/GamesCheckOut'
import lol from "../../../..//public/gamesCheckOut/lol.webp"
const LeagueOfLegends = () => {
    const information = {
        title:"League of Legends",
        span:"Boosting",
        p:"World class League of Legends net win boosting from Turboboost, we work with the top 0.1% of players in the ranked ladders on every region.",
        img:lol
    }
  return (
    <div>
        <GamesCheckOut information={information}/>
    </div>
  )
}

export default LeagueOfLegends