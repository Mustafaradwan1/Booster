import GamesCheckOut from '@/shard/GamesCheckOut/GamesCheckOut'
import lol from "../../../..//public/gamesCheckOut/Overwatch.png"
const Overwatch2 = () => {
    const information = {
        title:"Overwatch 2",
        span:"Boosting",
        p:"Want to dominate Overwatch 2? Turboboost Top-tier boosting services, powered by the top 500 players, will help you climb the ranks faster than ever. Enjoy unbeatable quality and fast results.",
        img:lol
    }
  return (
    <div>
        <GamesCheckOut information={information}/>
    </div>
  )
}

export default Overwatch2