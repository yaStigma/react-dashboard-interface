import { useState } from "react";
import { Paperclip } from "lucide-react";

export default function AccountCommunicationSection({ communication }) {
  const [activeButton, setActiveButton] = useState("");

  if (!communication || communication.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <section className="w-full  flex flex-col items-start mt-[42px] ">
      <h2 className="text-heading font-heading leading-heading text-textMuted mb-[37px] ">
        Communication
      </h2>

      <div className="w-full h-[726px] flex flex-col  items-start py-[24px] px-[19px]   rounded-[20px] border  border-cardBorder bg-cardLight">
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
        <div className="p-4 columns-2  w-full">
          {communication.map((item, index) => (
            <div
              key={index}
              className={`mb-4 w-[780px] break-inside-avoid px-[25px] py-[23px] flex flex-col items-start justify-start bg-tableHeader hover:border-1 hover:border-cardBlue rounded-[20px] cursor-pointer ${
                item.status === "NEW" ? "border-1 border-gradientfrom" : ""
              }`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                {!item.status ? (
                  ""
                ) : (
                  <p className="text-textMuted text-labelSm rounded-full px-[13px] py-[4px] bg-gradientfrom">
                    {item.status}
                  </p>
                )}
                <p className="text-textMuted text-subheading">{item.title} </p>
              </div>
              <p className="text-label  text-tableTextHead mb-4">
                {item.sender} // {item.date}
              </p>
              <p className="text-label  text-textMuted mb-2.5">
                {item.message}
              </p>
              {item.attachments === 0 ? (
                ""
              ) : (
                <div className="flex items-center justify-center py-[7px] px-5 rounded-full bg-green text-labelSm text-textMuted cursor-pointer mb-2">
                  <Paperclip className="size-[14px] mr-1" /> {item.attachments}{" "}
                  attachments
                </div>
              )}

              {!item.reply ? (
                ""
              ) : (
                <button
                  type="button"
                  className="py-2 px-10 rounded-full bg-cardBlue hover:bg-gradientfrom text-textPrimary text-label font-label cursor-pointer"
                >
                  Reply
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
