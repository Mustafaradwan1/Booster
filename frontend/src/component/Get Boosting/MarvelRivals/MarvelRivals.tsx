import GamesCheckOut from '@/shard/GamesCheckOut/GamesCheckOut'
import lol from "../../../..//public/gamesCheckOut/Marvel.png"
const MarvelRivals = () => {
    const information = {
        title:"Marvel Rivalss",
        span:"Boosting",
        p:"Take your Marvel Rivals account to the next level with our Professional Players. Our services help you achieve your desired rank and boost your win rate effortlessly",
        img:lol
    }
  return (
    <div>
        <GamesCheckOut information={information}/>
    </div>
  )
}

export default MarvelRivals