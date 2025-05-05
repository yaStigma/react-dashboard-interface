import { useState } from "react";
const statusIndicator = {
  Active: <div className="size-2.5 rounded-full bg-statusCompleted"></div>,
  "Under review": <div className="size-2.5 rounded-full bg-gradientfrom"></div>,
};
const getBgColorByPercentage = (value) => {
  if (value < 33) return "bg-statusCompleted";
  if (value < 66) return "bg-statusPending text-background";
  return "bg-statusFailed";
};

export default function MyAccountsSection({ myAccounts }) {
  const [activeButton, setActiveButton] = useState("new");
  if (!myAccounts || myAccounts.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <section className="w-full  flex flex-col items-start p-[25px] rounded-[20px] border  border-cardBorder bg-cardLight">
      <div className="flex flex-row mb-[25px] ">
        <h2 className="text-subheading font-subheading leading-subheading text-textMuted mr-7">
          My accounts
        </h2>
        <input
          type="text"
          placeholder="Search"
          className="w-[250px] h-[28] text-labelSm font-body text-textSecondary border-none  rounded-full outline-none  bg-tableHeader px-4  mr-3.5 focus:outline-none focus:border-cardBlue focus:ring-2 transition-all cursor-pointer"
        />
        <div className="flex items-center flex-row gap-2  ">
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
            onClick={() => setActiveButton("sort")}
            className={`group text-center  w-[99px] h-[27px] text-labelSm rounded-full border-1 border-cardBlue transition-all cursor-pointer ${
              activeButton === "sort"
                ? "bg-cardBlue text-textPrimary"
                : "bg-cardLight text-cardBlue hover:bg-cardBlue hover:text-textPrimary"
            }`}
          >
            Sort
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
          <button
            type="button"
            onClick={() => setActiveButton("new")}
            className={`group text-center  w-[99px] h-[27px] text-labelSm rounded-full border-1 border-cardBlue transition-all cursor-pointer ${
              activeButton === "new"
                ? "bg-cardBlue text-textPrimary"
                : "bg-cardLight text-cardBlue hover:bg-cardBlue hover:text-textPrimary"
            }`}
          >
            + New
          </button>
        </div>
      </div>
      <div className="w-full overflow-y-auto max-h-[400px] snap-y custom-scroll">
        <table className="w-full text-left border-none">
          <thead className="sticky top-0 bg-tableHeader text-tableTextHead text-[9px] z-10">
            <tr>
              <th className="py-3 px-5 text-[9px] font-label">
                ACCOUNT NAME/TYPE
              </th>
              <th className="py-3  text-[9px] font-label">LINE</th>
              <th className="py-3  text-[9px] font-label">BROKER</th>
              <th className="py-3  text-[9px] font-label">RENEWAL DATE</th>
              <th className="py-3  text-[9px] font-label w-[75px]">PREMIUM</th>
              <th className="py-3  text-[9px] font-label w-[75px]">
                RATED PREMIUM
              </th>
              <th className="py-3  text-[9px] font-label text-center w-[100px]">
                LOSS RATIO
              </th>
              <th className="py-3  text-[9px] font-label w-[83px]">APPETITE</th>
              <th className="py-3 px-4.5  text-[9px] font-label w-[130px] ">
                STATUS
              </th>
              <th className="py-3  text-[9px] font-label text-center w-[100px] ">
                TRIAGE
              </th>

              <th className="py-3  text-[9px] font-label w-[200px]">
                WINNABILITY
              </th>

              <th className="w-[60px]"></th>
            </tr>
          </thead>
          <tbody className=" text-textMuted text-labelSm  ">
            {myAccounts.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-transparent" : "bg-tableAccent"
                }`}
              >
                <td className="py-3 px-5">
                  <p className="text-labelSm"> {item.name}</p>
                  <span className=" text-tableTextHead">{item.type}</span>
                </td>
                <td className="">{item.line}</td>
                <td className="">{item.broker}</td>
                <td className="">{item.renewalDate}</td>
                <td className=" text-cardBlue font-subheading">
                  {item.premium}
                </td>
                <td className=" text-end">{item.ratedPremium}</td>
                <td className="text-center ">
                  <div
                    className={`flex items-center justify-center m-auto ${getBgColorByPercentage(
                      item.lossRatio
                    )} w-[52px] h-[24px] rounded-full`}
                  >
                    {item.lossRatio}%
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center m-auto bg-gradientto  w-[83px] h-[24px] rounded-full">
                    {item.appetite}
                  </div>
                </td>

                <td className="px-4.5">
                  <div className="flex flex-row items-center gap-1">
                    {statusIndicator[item.status]}
                    {item.status}
                  </div>
                </td>
                <td className="text-center">
                  <div className="flex items-center justify-center m-auto text-cardBlue border-1 border-cardBlue  w-[43px] h-[23px] rounded-full">
                    {item.triage}
                  </div>
                </td>
                <td className="">
                  <div className="inline-flex px-[9.5px] py-[2.5px]  items-center  text-cardBlue border-1 border-cardBlue   rounded-full">
                    <div className="size-2.5 rounded-full bg-cardBlue mr-1"></div>
                    <div className="size-2.5 rounded-full  bg-cardBlue mr-1"></div>
                    <div className="size-2.5 rounded-full  bg-cardBlue mr-1"></div>
                    <div className="size-2.5 rounded-full  bg-cardBlue mr-1"></div>
                    {item.winnability}
                  </div>
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
          </tbody>
        </table>
      </div>
    </section>
  );
}
