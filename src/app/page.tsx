import Image from "next/image";
import MainSideNavigation from "./components/MainSideNavigation";
import MainTutorialSection from "./components/MainTutorialSection";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen">
      <div className="flex w-full">
        <div className="flex w-3/12">
          <MainSideNavigation />
        </div>
        <div className="flex w-full">
          <MainTutorialSection />
        </div>
      </div>
    </main>
  );
}
