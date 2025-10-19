import GamesCheckOut from '@/shard/GamesCheckOut/GamesCheckOut'
import lol from "../../../..//public/gamesCheckOut/Apex.png"
const ApexLegends = () => {
    const information = {
        title:"Apex Legends",
        span:"Boosting",
        p:"Achieve Rapid Rank Progression in Apex Legends with Turboboost Top-tier Boosting Services, from Professional Predator Players for unbeatable quality and fast results.",
        img:lol
    }
  return (
    <div>
        <GamesCheckOut information={information}/>
    </div>
  )
}

export default ApexLegends