import PopularGames from "@/component/homePage/PopularGames";
import Header from "@/component/homePage/Header";
import ChoseYourGame from "@/component/homePage/ChoseYourGame";
export default function Home() {
  return (
    <div>
      <Header/>
      <PopularGames/>
      <ChoseYourGame/>
    </div>
  );
}
