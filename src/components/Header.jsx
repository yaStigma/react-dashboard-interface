import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function Header() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/mockData.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <Loader />;

  return (
    <header className="w-full flex justify-center border-b-2 border-cardBorder">
      <div className="flex items-center justify-between py-6 w-[1656px]  ">
        <h1 className="text-textPrimary text-headingLg font-headingLg leading-headingLg">
          Hi {data.dashboard.name}, welcome! You have {data.dashboard.tasks}{" "}
          open tasks.
        </h1>
        <div className="flex items-center gap-[11px]">
          <input
            type="text"
            placeholder="Search"
            className="w-[479px] h-[48] text-body font-body text-textSecondary border-none  rounded-full outline-none  bg-cardLight px-4 py-3 focus:outline-none focus:border-cardBlue focus:ring-2 transition-all cursor-pointer"
          />
          <div className="size-12 flex items-center justify-center rounded-full bg-radial-[at_50%_75%] from-gradientfrom to-gradientto to-100% text-textPrimary text-heading font-heading leading-heading">
            {data.dashboard.name.substring(0, 2).toUpperCase()}
          </div>
        </div>
      </div>
    </header>
  );
}
