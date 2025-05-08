import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import WorkQueueSection from "../components/WorkQueueSection";
import PortfolioGoalsSection from "../components/PortfolioGoalsSection";
import QuickActionsSection from "../components/QuickActionsSection";
import MarketIntelligenceSection from "../components/MarketIntelligenceSection";
import MyAccountsSection from "../components/MyAccountsSection";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/mockData.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <Loader />;
  const { workQueue, myAccounts } = data.dashboard;

  return (
    <div className="flex flex-col gap-[17px] items-center w-[1656px] mx-auto">
      <div className="flex flex-col xl:flex-row gap-4.5 items-center w-full mx-auto">
        <WorkQueueSection workQueue={workQueue} />
        <div className="flex gap-[17px]">
          <PortfolioGoalsSection />
          <div className="flex flex-col gap-[14px] ">
            <QuickActionsSection />
            <MarketIntelligenceSection />
          </div>
        </div>
      </div>
      <MyAccountsSection myAccounts={myAccounts} />
    </div>
  );
}
