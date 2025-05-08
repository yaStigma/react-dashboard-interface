import { useState } from "react";
import {
  Ship,
  Building2,
  Umbrella,
  ShieldCheck,
  ShieldUser,
} from "lucide-react";

const iconMap = {
  "Marine Cargo": (
    <span className="size-6 flex items-center justify-center rounded-full bg-[#3B82F6]">
      <Ship className="size-4 text-textPrimary" />
    </span>
  ),
  "General Liability": (
    <span className="size-6 flex items-center justify-center rounded-full bg-[#3BB979]">
      <ShieldCheck className="size-4 text-textPrimary" />
    </span>
  ),
  "Workers Comp": (
    <span className="size-6 flex items-center justify-center rounded-full bg-[#6A3BF6]">
      <ShieldUser className="size-4 text-textPrimary" />
    </span>
  ),
  Umbrella: (
    <span className="size-6 flex items-center justify-center rounded-full bg-[#B93B3B]">
      <Umbrella className="size-4 text-textPrimary" />
    </span>
  ),
};
const statusIndicator = {
  Active: <div className="size-2.5 rounded-full bg-statusCompleted"></div>,
  Pending: <div className="size-2.5 rounded-full bg-statusPending"></div>,
};
const getBgColorByPercentage = (value) => {
  if (value < 33) return "bg-statusCompleted";
  if (value < 66) return "bg-statusPending text-background";
  return "bg-statusFailed";
};

export default function AccountPoliciesTableSection({ policiesCard }) {
  const [activeButton, setActiveButton] = useState("");
  // if (!myAccounts || myAccounts.length === 0) {
  //   return <div>No data available</div>;
  // }

  return (
    <section className="w-full  flex flex-col items-start mt-[37px] ">
      <h2 className="text-heading font-heading leading-heading text-textMuted mb-5 ">
        Policies
      </h2>
      <div className="w-full h-[461px] flex flex-col  items-start py-[20px] px-[24px]   rounded-[20px] border  border-cardBorder bg-cardLight">
        <div className="flex flex-row mb-[15px] gap-[11px]">
          <input
            type="text"
            placeholder="Search"
            className="w-[250px] h-[28] text-labelSm font-body text-textSecondary border-1 border-tableHeader  rounded-full outline-none  bg-transparent px-4   focus:outline-none focus:border-cardBlue focus:ring-2 transition-all cursor-pointer"
          />
          <div className="flex items-center flex-row gap-[11px]  ">
            <button
              type="button"
              onClick={() => setActiveButton("filter")}
              className={`group text-center  w-[99px] h-[27px] text-labelSm rounded-full border-1 border-cardBlue transition-all cursor-pointer ${
                activeButton === "filter"
                  ? "bg-cardBlue text-textPrimary"
                  : "bg-cardLight text-cardBlue hover:bg-cardBlue hover:text-textPrimary"
              }`}
            >
              Filter
            </button>

            <button
              type="button"
              onClick={() => setActiveButton("group")}
              className={`group text-center  w-[99px] h-[27px] text-labelSm rounded-full border-1 border-cardBlue transition-all cursor-pointer ${
                activeButton === "group"
                  ? "bg-cardBlue text-textPrimary"
                  : "bg-cardLight text-cardBlue hover:bg-cardBlue hover:text-textPrimary"
              }`}
            >
              Group
            </button>
          </div>
        </div>
        <div className="w-full overflow-y-auto max-h-[460px] snap-y custom-scroll">
          <table className="w-full text-left border-none">
            <thead className="sticky top-0 bg-tableHeader text-tableTextHead text-[9px] z-10">
              <tr>
                <th className="py-3 px-5 text-[9px] font-label">LINE</th>
                <th className="py-3  text-[9px] font-label w-35">EFF.DATE</th>
                <th className="py-3  text-[9px] font-label w-35">EXP.DATE</th>
                <th className="py-3  text-[9px] font-label w-35">STATUS</th>
                <th className="py-3  text-[9px] font-label w-35">
                  EXPIRING TECH
                </th>
                <th className="py-3  text-[9px] font-label w-35">
                  EXPIRING PREMIUM
                </th>
                <th className="py-3  text-[9px] font-label w-35">
                  RENEWAL TO TECH
                </th>
                <th className="py-3  text-[9px] font-label w-35">
                  RENEWAL TECH
                </th>
                <th className="py-3  text-[9px] font-label w-35">
                  RENEWAL PREMIUM
                </th>
                <th className="py-3  text-[9px] font-label w-20">
                  RATE CHANCE
                </th>
                <th className="py-3  text-[9px] font-label text-center w-30">
                  LOSS RATIO
                </th>
                <th className="w-[60px]"></th>
              </tr>
            </thead>
            <tbody className=" text-textMuted text-labelSm  ">
              {policiesCard.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-transparent" : "bg-tableAccent"
                  }`}
                >
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-[5px] mb-[5px]">
                      {iconMap[item.name]}
                      <p className="text-label"> {item.name}</p>
                    </div>

                    <p className=" text-tableTextHead">{item.code}</p>
                  </td>
                  <td className="">{item.effDate}</td>
                  <td className="">{item.expDate}</td>
                  <td className="">
                    <div className="flex flex-row items-center gap-1">
                      {statusIndicator[item.status]}
                      {item.status}
                    </div>
                  </td>
                  <td className="">${item.expiringTech.toFixed(3)}</td>
                  <td className="">${item.expiringPremium.toFixed(3)}</td>
                  <td className="">${item.renewalToTech.toFixed(3)}</td>
                  <td className="">${item.renewalToTechPremium.toFixed(3)}</td>
                  <td className="">${item.renewalPremium.toFixed(3)}</td>
                  <td className="">{item.rateChange}</td>

                  <td className="text-center">
                    {item.lossRatio === "N/A" ? (
                      <p>N/A</p>
                    ) : (
                      <div
                        className={`flex items-center justify-center m-auto  ${getBgColorByPercentage(
                          item.lossRatio
                        )} w-[52px] h-[24px] rounded-full`}
                      >
                        {item.lossRatio}%
                      </div>
                    )}
                  </td>

                  <td className="">
                    <div className="relative group">
                      <button
                        type="button"
                        title="Options"
                        className="w-6 h-6 flex items-center justify-center rounded-full border-[1.5px] border-current text-textPrimary hover:bg-cardBlue transition-all cursor-pointer"
                      >
                        <span className="flex flex-col items-center justify-center gap-[2px]">
                          <span className="w-[2px] h-[2px] bg-current rounded-full"></span>
                          <span className="w-[2px] h-[2px] bg-current rounded-full"></span>
                          <span className="w-[2px] h-[2px] bg-current rounded-full"></span>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className=" text-body border-b-1 border-cardBorder">
                <td className="py-3 px-[46px] text-right" colSpan="4">
                  TOTAL (4)
                </td>
                <td className="">
                  $
                  {policiesCard
                    .reduce((sum, item) => sum + (item.expiringTech || 0), 0)
                    .toFixed(3)}
                </td>
                <td className="">
                  $
                  {policiesCard
                    .reduce((sum, item) => sum + (item.expiringPremium || 0), 0)
                    .toFixed(3)}
                </td>
                <td className="">
                  $
                  {policiesCard
                    .reduce((sum, item) => sum + (item.renewalToTech || 0), 0)
                    .toFixed(3)}
                </td>
                <td className="">
                  $
                  {policiesCard
                    .reduce(
                      (sum, item) => sum + (item.renewalToTechPremium || 0),
                      0
                    )
                    .toFixed(3)}
                </td>
                <td className="">
                  $
                  {policiesCard
                    .reduce((sum, item) => sum + (item.renewalPremium || 0), 0)
                    .toFixed(3)}
                </td>
                <td className="">6.9%</td>
                <td className="text-center">
                  <div
                    className={`flex items-center justify-center m-auto  ${getBgColorByPercentage(
                      58.3
                    )} w-[52px] h-[24px] rounded-full`}
                  >
                    {58.3}%
                  </div>
                </td>
                <td className=""></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
