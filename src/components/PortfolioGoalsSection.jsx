export default function PortfolioGoalsSection() {
  const topPercent = 55;
  const bottomPercent = 35;
  const bottomPercent2 = 60;

  return (
    <section className="w-[285px] h-[550px] flex flex-col items-start p-[25px] rounded-[20px] border  border-cardBorder bg-cardLight">
      <h2 className="text-subheading font-subheading leading-subheading text-textMuted mb-5 ">
        Portfolio Goals
      </h2>
      <p className="text-[12px]  text-tableTextHead">
        PORTFOLIO LOSS RATIO TARGET
      </p>
      <div className="relative w-full max-w-[500px] h-[80px] mx-auto mt-8">
        <div
          className="absolute -top-8 "
          style={{ left: `${topPercent}%`, transform: "translateX(-50%)" }}
        >
          <div className="flex flex-col items-center">
            <p className="text-[10px] text-center text-tableTextHead">TG:55%</p>
            <img src="/Vector-blue.svg" />
          </div>
        </div>

        <div className="w-[238px] h-[25px] flex rounded-full overflow-hidden ">
          <div className="w-[91px] bg-[#3BB979]" />
          <div className="w-[57px] bg-[#FDD261]" />
          <div className="w-[90px] bg-[#CC0101]" />
        </div>

        <div
          className="absolute bottom-7 "
          style={{ left: `${bottomPercent}%`, transform: "translateX(-50%)" }}
        >
          <div className="flex flex-col items-center">
            <p className="text-[12px] text-center text-textMuted">42.2%</p>
            <img src="/Vector-green.svg" />
            <p className="text-[10px] text-center text-statusCompleted">
              -6.8% (GOOD)
            </p>
          </div>
        </div>
      </div>
      <p className="text-[12px]  text-tableTextHead">RENEWAL RETENTION</p>
      <div className="relative w-full max-w-[500px] h-[80px] mx-auto mt-8">
        <div
          className="absolute -top-5 "
          style={{ left: `${bottomPercent2}%`, transform: "translateX(-50%)" }}
        >
          <div className="flex flex-col items-center">
            <p className="text-[10px] text-center text-tableTextHead">
              TG:85-90%
            </p>
          </div>
        </div>

        <div className="w-[238px] h-[25px] flex rounded-full overflow-hidden ">
          <div className="w-[42px] bg-[#CC0101]" />
          <div className="w-[80px] bg-[#FDD261]" />
          <div className="w-[34px] bg-[#3BB979]" />
          <div className="w-[84px] bg-[#FDD261]" />
        </div>

        <div
          className="absolute bottom-7 "
          style={{ left: `${bottomPercent2}%`, transform: "translateX(-50%)" }}
        >
          <div className="flex flex-col items-center">
            <p className="text-[12px] text-center text-textMuted">88%</p>
            <img src="/Vector-green.svg" />
            <p className="text-[10px] text-center text-statusCompleted">
              ON TARGET
            </p>
          </div>
        </div>
      </div>

      <p className="text-[12px]  text-tableTextHead mb-[5px]">
        NEW BUSINESS TARGET
      </p>
      <div className="flex gap-1 items-center">
        <div>
          <div className="bg-cardBorder rounded-r-full h-[25px] w-[197px]">
            <div
              className=" flex justify-end items-center bg-gradient-to-r rounded-r-full from-[transpatent] to-[#3B82F6] h-[25px]"
              style={{ width: `${67}%` }}
            >
              <p className="text-labelSm text-textMuted text-end pr-2">$8.1M</p>
            </div>
          </div>
        </div>
        <p className="text-labelSm text-textMuted">$12M</p>
      </div>
      <p className="text-[10px] text-center text-tableTextHead ml-[110px] mb-[37px]">
        67%
      </p>
      <p className="text-[12px]  text-tableTextHead mb-[5px]">
        ANNUAL GWP TARGET
      </p>
      <div className="flex gap-1 items-center">
        <div>
          <div className="bg-cardBorder rounded-r-full h-[25px] w-[197px]">
            <div
              className=" flex justify-end items-center bg-gradient-to-r rounded-r-full from-[transpatent] to-[#3B82F6] h-[25px]"
              style={{ width: `${68}%` }}
            >
              <p className="text-labelSm text-textMuted text-end pr-2">
                $28.4M
              </p>
            </div>
          </div>
        </div>
        <p className="text-labelSm text-textMuted">$42M</p>
      </div>
      <p className="text-[10px] text-center ml-[110px] text-tableTextHead">
        68%
      </p>
    </section>
  );
}
