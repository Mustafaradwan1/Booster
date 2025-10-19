import GamesCheckOut from '@/shard/GamesCheckOut/GamesCheckOut'
import lol from "../../../..//public/gamesCheckOut/Counter.webp"
const CounterStrike2 = () => {
    const information = {
        title:"Counter Strike 2",
        span:"Boosting",
        p:"Boost your CS2 rank quickly and safely with Turboboost – your go to service for affordable and efficient CS2 boosting. Our team consists of elite boosters, including Premier Gold Rating, Global Elite players and Faceit level 10, ready to help you climb the ranks in Premier, Competitive, and Faceit modes.",
        img:lol
    }
  return (
    <div>
        <GamesCheckOut information={information}/>
    </div>
  )
}

export default CounterStrike2
