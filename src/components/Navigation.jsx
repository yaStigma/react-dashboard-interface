import { useState, useEffect } from "react";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";
import { HomeIcon, CircleStackIcon } from "@heroicons/react/24/outline";
import { FiUsers } from "react-icons/fi";
import { GrDocumentTransfer } from "react-icons/gr";
import { GoOrganization } from "react-icons/go";
import { LuGoal } from "react-icons/lu";
import { IoKeyOutline } from "react-icons/io5";

const iconMap = {
  Dashboard: <HomeIcon className="size-5" />,
  Accounts: <CircleStackIcon className="size-5" />,
  Brokers: <FiUsers className="size-5" />,
  Submissions: <GrDocumentTransfer className="size-5" />,
  Organizations: <GoOrganization className="size-5" />,
  "Goals&Rules": <LuGoal className="size-5" />,
  Admin: <IoKeyOutline className="size-5" />,
};

export default function Navigation() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/mockData.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <Loader />;

  return (
    <div className="w-full flex justify-center ">
      <nav className="flex items-center w-[1656px] flex-row gap-2 py-5">
        {data.dashboard.navigation.map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className={({ isActive }) =>
              `group flex items-center gap-3 p-3.5 rounded-full border border-cardBorder transition-all cursor-pointer ${
                isActive
                  ? "bg-cardBlue text-textPrimary"
                  : "bg-cardDark text-textSecondary hover:bg-cardBlue hover:text-textPrimary"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`size-5 transition-all ${
                    isActive
                      ? "text-textPrimary"
                      : "text-cardBlue group-hover:text-textPrimary"
                  }`}
                >
                  {iconMap[item]}
                </div>
                <span>{item}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
