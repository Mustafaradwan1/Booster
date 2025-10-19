import GamesCheckOut from '@/shard/GamesCheckOut/GamesCheckOut'
import lol from "../../../..//public/gamesCheckOut/TeamfightTactics.webp"
const TeamfightTactics = () => {
    const information = {
        title:"Teamfight Tactics",
        span:"Boosting",
        p:"World class Teamfight Tactics net win boosting from Turboboost, we work with the top 0.1% of players in the ranked ladders on every region.",
        img:lol
    }
  return (
    <div>
        <GamesCheckOut information={information}/>
    </div>
  )
}

export default TeamfightTactics
