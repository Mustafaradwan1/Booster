import PopularGames from "@/component/homePage/PopularGames";
import Header from "@/component/homePage/Header";
import ChoseYourGame from "@/component/homePage/ChoseYourGame";
import Community from "@/component/homePage/Community";
import News from "@/component/homePage/News";
export default function Home() {
  return (
    <div>
      <Header/>
      <PopularGames/>
      <ChoseYourGame/>
      <Community/>
      <News/>
    </div>
  );
}
