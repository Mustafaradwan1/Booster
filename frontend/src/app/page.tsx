import BoostingAddons from "@/component/homePage/BoostingAddons";
import PopularGames from "@/component/homePage/PopularGames";
import Header from "@/component/homePage/Header";
import InformatinOutSite from "@/component/homePage/InformatinOutSite";
import Recent from "@/component/homePage/Recent";
export default function Home() {
  return (
    <div>
      <Header/>
      <PopularGames/>
      <Recent/>
      <BoostingAddons/>
      <InformatinOutSite/>
    </div>
  );
}
