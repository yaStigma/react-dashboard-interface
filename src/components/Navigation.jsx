import { useState, useEffect } from "react";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";

import {
  House,
  Database,
  UsersRound,
  FileSymlink,
  Building2,
  Goal,
  KeyRound,
} from "lucide-react";

const iconMap = {
  Dashboard: <House className="size-5" />,
  Accounts: <Database className="size-5" />,
  Brokers: <UsersRound className="size-5" />,
  Submissions: <FileSymlink className="size-5" />,
  Organizations: <Building2 className="size-5" />,
  "Goals&Rules": <Goal className="size-5" />,
  Admin: <KeyRound className="size-5" />,
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
      <nav className="flex items-center w-[1656px] flex-row gap-[9px] py-5">
        {data.dashboard.navigation.map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className={({ isActive }) =>
              `group flex items-center gap-3 p-3 text-labelSm rounded-full border border-cardBorder transition-all cursor-pointer ${
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
