import SportsPage from "./components/SportsPage"
import CollectionsPage from "./components/CollectionsPage";
import ThemeSwitcher from "./components/ThemeSwitcher";
export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center dark:bg-[#292B32]">
        <div className="fixed top-0 right-5"><ThemeSwitcher  /></div>
        <SportsPage />
        <CollectionsPage />
      </main>
    );
}
