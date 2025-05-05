import { useState } from "react";

const statusIndicator = {
  New: <div className="size-2.5 rounded-full bg-statusNew"></div>,
  "Pending Review": (
    <div className="size-2.5 rounded-full bg-statusPending"></div>
  ),
  Completed: <div className="size-2.5 rounded-full bg-statusCompleted"></div>,
};
export default function WorkQueueSection({ workQueue }) {
  const [activeButton, setActiveButton] = useState("assigned");
  if (!workQueue || workQueue.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <section className="w-[1035px] h-[550px] flex flex-col items-start p-[25px] rounded-[20px] border  border-cardBorder bg-cardLight">
      <h2 className="text-subheading font-subheading leading-subheading text-textMuted mb-5 ">
        Work Queue
      </h2>
      <div className="flex items-center flex-row gap-2 mb-[25px] ">
        <button
          type="button"
          onClick={() => setActiveButton("assigned")}
          className={`group flex items-center py-2 px-4.5 text-labelSm rounded-full border-none transition-all cursor-pointer ${
            activeButton === "assigned"
              ? "bg-cardBlue text-textPrimary"
              : "bg-cardDark text-textSecondary hover:bg-cardBlue hover:text-textPrimary"
          }`}
        >
          Assigned to me (12)
        </button>
        <button
          type="button"
          onClick={() => setActiveButton("pending")}
          className={`group flex items-center py-2 px-4.5 text-labelSm rounded-full border-none transition-all cursor-pointer ${
            activeButton === "pending"
              ? "bg-cardBlue text-textPrimary"
              : "bg-cardDark text-textSecondary hover:bg-cardBlue hover:text-textPrimary"
          }`}
        >
          Pending Review (8)
        </button>
        <button
          type="button"
          onClick={() => setActiveButton("referrals")}
          className={`group flex items-center py-2 px-4.5 text-labelSm rounded-full border-none transition-all cursor-pointer ${
            activeButton === "referrals"
              ? "bg-cardBlue text-textPrimary"
              : "bg-cardDark text-textSecondary hover:bg-cardBlue hover:text-textPrimary"
          }`}
        >
          Referrals (3)
        </button>
      </div>
      <div className="w-full overflow-y-auto max-h-[400px] snap-y custom-scroll">
        <table className="w-full text-left border-none">
          <thead className="sticky top-0 bg-tableHeader text-tableTextHead text-[9px] z-10">
            <tr>
              <th className="py-3 px-5 text-[9px] font-label">ORIGINATOR</th>
              <th className="py-3  text-[9px] font-label">CLIENT/LINE</th>
              <th className="py-3  text-[9px] font-label">TYPE</th>
              <th className="py-3  text-[9px] font-label w-[120px]">STATUS</th>
              <th className="py-3  text-[9px] font-label w-[100px]">CREATED</th>
              <th className="w-[60px]"></th>
            </tr>
          </thead>
          <tbody className=" text-textMuted text-labelSm  ">
            {workQueue.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-transparent" : "bg-tableAccent"
                }`}
              >
                <td className="py-3 px-5 flex flex-row items-center gap-1.5">
                  <span className="size-8 flex items-center justify-center rounded-full bg-radial-[at_50%_75%] from-gradientfrom to-gradientto to-100% text-textMuted text-labelSm font-label ">
                    {item.originator
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                  {item.originator}
                </td>
                <td>
                  <p className="text-labelSm">{item.client}</p>
                  <span className="text-labelSm text-tableTextHead">
                    {item.line}
                  </span>
                </td>
                <td className=" ">{item.type}</td>
                <td className="flex flex-row items-center gap-1">
                  {statusIndicator[item.status]}
                  {item.status}
                </td>
                <td className="">{item.created}</td>
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
