import GamesCheckOut from '@/shard/GamesCheckOut/GamesCheckOut'
import lol from "../../../..//public/gamesCheckOut/LoLArena.jpg"
const LoLArena = () => {
    const information = {
        title:"LoL Arena",
        span:"Boosting",
        p:"World class LoL Arena boosting by the best boosters in the world, our boosters can help you reach up to Gladiator Rank in the new league of legends 2v2v2v2v2v2v2v2 mode!",
        img:lol
    }
  return (
    <div>
        <GamesCheckOut information={information}/>
    </div>
  )
}

export default LoLArena