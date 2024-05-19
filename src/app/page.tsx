import Image from "next/image";
import MainSideNavigation from "./components/MainSideNavigation";
import MainTutorialSection from "./components/MainTutorialSection";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen">
      <div className="flex w-full overflow-y-hidden">
        <div className="flex w-3/12 h-full overflow-y-scroll sticky flex-shrink-0">
          <MainSideNavigation />
        </div>
        <div className="flex w-full flex-1">
          <MainTutorialSection />
        </div>
      </div>
    </main>
  );
}
