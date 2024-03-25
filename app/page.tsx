import Image from "next/image";
import Sports from "./components/Sports";
import Collection from "./components/Collection";
import SportsPage from "./components/SportsPage"
export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center ">
        {/* <Collection /> */}
        <SportsPage />
      </main>
    );
}
