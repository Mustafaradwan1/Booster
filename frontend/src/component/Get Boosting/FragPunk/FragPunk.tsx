import GamesCheckOut from '@/shard/GamesCheckOut/GamesCheckOut'
import lol from "../../../..//public/gamesCheckOut/FragPunk.png"
const FragPunk = () => {
    const information = {
        title:"FragPunk",
        span:"Boosting",
        p:"Elevate your FragPunk experience with our expert Professional Players! We provide top-notch boosting services to achieve your desired rank with high win rates.",
        img:lol
    }
  return (
    <div>
        <GamesCheckOut information={information}/>
    </div>
  )
}

export default FragPunk
