import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import WorkQueueSection from "../components/WorkQueueSection";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/mockData.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <Loader />;
  const { workQueue } = data.dashboard;

  return (
    <div className="flex items-center w-[1656px] mx-auto">
      <WorkQueueSection workQueue={workQueue} />
    </div>
  );
}
