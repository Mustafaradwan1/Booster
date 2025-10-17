import BoostingAddons from "@/component/homePage/BoostingAddons";
import Games from "@/component/homePage/Games";
import Header from "@/component/homePage/Header";
import InformatinOutSite from "@/component/homePage/InformatinOutSite";
import MoveSection from "@/component/homePage/MoveSection";
import Recent from "@/component/homePage/Recent";
export default function Home() {
  return (
    <div>
      <Header/>
      <MoveSection/>
      <Games/>
      <Recent/>
      <BoostingAddons/>
      <InformatinOutSite/>
    </div>
  );
}
