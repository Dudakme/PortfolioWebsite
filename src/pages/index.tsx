import Navbar from "../components/nav/NavSetup";
import FirstSec from "../components/main/FirstShowing"
import SecSection from "../components/main/SecShowing"

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <div className="pb-40"/>
      <FirstSec/>
      <main></main>
      <SecSection/>
    </div>
  );
}
