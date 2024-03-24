import Image from "next/image";
import Sports from "./components/Sports";
import Collection from "./components/Collection";

export default function Home() {
  return (
      <main>
        <Sports />
        <Collection />
      </main>
    );
}
