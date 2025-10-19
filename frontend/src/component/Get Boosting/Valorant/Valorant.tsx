import GamesCheckOut from '@/shard/GamesCheckOut/GamesCheckOut'
import lol from "../../../..//public/gamesCheckOut/Valorant.png"
const Valorant = () => {
    const information = {
        title:"Valorant",
        span:"Boosting",
        p:"World class Valorant net win boosting from Turboboost, we work with the top 0.1% of players in the ranked ladders on every region.",
        img:lol
    }
  return (
    <div>
        <GamesCheckOut information={information}/>
    </div>
  )
}

export default Valorant