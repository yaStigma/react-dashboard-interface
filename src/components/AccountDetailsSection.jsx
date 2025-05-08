import { Rocket, CircleArrowDown } from "lucide-react";
const menu = [
  "Winnability",
  "Exposure Review & Suggested Coverage",
  "Portfolio Strategy Alignment",
  "Broker Analytics",
];
export default function AccountDetailsSection({ accountDetails }) {
  if (!accountDetails || accountDetails.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <section className="w-full  flex flex-col items-start mt-[42px] ">
      <h2 className="text-heading font-heading leading-heading text-textMuted mb-[34px] ">
        Account Details
      </h2>

      <div className="max-w-full h-full flex flex-col lg:flex-row  items-start py-[24px] px-[19px]   rounded-[20px] border  border-cardBorder bg-cardLight">
        <div className="w-full h-full border-b-2 lg:border-r-2  lg:border-b-0 border-dashed border-cardBorder">
          <div className=" flex flex-row lg:flex-col gap-2 items-start">
            <div className="w-[346px] h-[301px] flex flex-col items-start  px-8 py-6 bg-tableHeader rounded-[20px] ">
              <div className="flex w-full items-end justify-between mb-4">
                <h2 className="text-subheading bloc text-textMuted uppercase">
                  Decision Support
                </h2>
                <div className="w-[33px] h-[39px] border bg-[#252A38] border-textMuted text-labelLg flex items-center justify-center rounded-[6px] text-textMuted">
                  4
                </div>
              </div>

              <ul className="space-y-3 text-sm">
                {menu.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      index === 0
                        ? "text-cardBlue font-medium"
                        : "text-textMuted hover:text-cardBlue"
                    } text-labelLg ml-6 mb-[25px]`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[346px]  flex flex-row items-start  px-8 py-6 rounded-[20px] hover:bg-tableHeader ">
              <div className="flex w-full items-end justify-between mb-4">
                <h2 className="text-subheading  text-textMuted uppercase">
                  risk assesment
                </h2>
                <div className="w-[33px] h-[39px] bg-[#252A38] hover:border hover:border-textMuted text-labelLg flex items-center justify-center rounded-[6px] text-textMuted">
                  6
                </div>
              </div>
            </div>
            <div className="w-[346px]  flex flex-row items-start  px-8 py-6 rounded-[20px] hover:bg-tableHeader ">
              <div className="flex w-full items-end justify-between mb-4">
                <h2 className="text-subheading  text-textMuted uppercase">
                  Documents and compliance
                </h2>
                <div className="w-[33px] h-[39px] bg-[#252A38] hover:border hover:border-textMuted text-labelLg flex items-center justify-center rounded-[6px] text-textMuted">
                  2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 px-[30px]">
          <h3 className="text-textMuted text-[50px]">Winnability</h3>
          <div className=" flex flex-row gap-2 items-start">
            <div className="max-w-[359px] lg:w-[359px] h-[151px] flex flex-col items-start justify-between px-6 py-6 bg-tableHeader rounded-[20px] ">
              <p className="text-subheading  text-textMuted">Overall Score</p>
              <div className="flex items-center">
                <p className="text-textMuted  text-[50px] mr-2.5">
                  {accountDetails.overallScore}%
                </p>
                <div className="inline-flex px-[9.5px] py-[2.5px]  items-center  text-cardBlue border-1 border-cardBlue   rounded-full">
                  <div className="size-2.5 rounded-full bg-cardBlue mr-1"></div>
                  <div className="size-2.5 rounded-full  bg-cardBlue mr-1"></div>
                  <div className="size-2.5 rounded-full  bg-cardBlue mr-1"></div>
                  <div className="size-2.5 rounded-full  bg-cardBlue mr-1"></div>
                  {accountDetails.scoreStrength}
                </div>
              </div>
            </div>
            <div className="max-w-[359px] lg:w-[359px] h-[151px] flex flex-col items-start justify-between px-6 py-6 bg-tableHeader rounded-[20px] ">
              <p className="text-subheading  text-textMuted mb-2">
                Historical trend
              </p>

              <img src="/historicalTrend.svg" className="w-[280px] ml-4 mb-2" />
              <div className="flex gap-[40px]">
                {accountDetails.historicalTrend.map((item) => (
                  <p className="text-label text-tableTextHead">{item}</p>
                ))}
              </div>
            </div>
            <div className="max-w-[450px] lg:w-[450px] h-[151px] flex flex-col items-start justify-between px-6 py-6 bg-tableHeader rounded-[20px] ">
              <p className="text-subheading  text-textMuted mb-2">Position</p>
              <div className="flex gap-[14px]">
                <div>
                  <div className="bg-cardBorder rounded-r-full h-[20px] w-[213px]">
                    <div
                      className="bg-gradient-to-r rounded-r-full from-[transpatent] to-[#3B82F6] h-[20px]"
                      style={{ width: `${accountDetails.overallScore}%` }}
                    />
                  </div>
                </div>
                <p className="text-label text-textMuted">
                  Your score: {accountDetails.overallScore}%
                </p>
              </div>
              <div className="flex gap-[14px]">
                <div>
                  <div className="bg-cardBorder rounded-r-full h-[20px] w-[213px]">
                    <div
                      className="bg-gradient-to-r rounded-r-full from-[transpatent] to-[#3B82F6] h-[20px]"
                      style={{ width: `${accountDetails.marketAvg}%` }}
                    />
                  </div>
                </div>
                <p className="text-label text-tableTextHead">
                  Market Avg: {accountDetails.marketAvg}%
                </p>
              </div>
              <div className="flex gap-[14px]">
                <div>
                  <div className="bg-cardBorder rounded-r-full h-[20px] w-[213px]">
                    <div
                      className="bg-gradient-to-r rounded-r-full from-[transpatent] to-[#3B82F6] h-[20px]"
                      style={{ width: `${accountDetails.topCompetitor}%` }}
                    />
                  </div>
                </div>
                <p className="text-label text-tableTextHead">
                  Top competitor: {accountDetails.topCompetitor}%
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-row gap-2 items-start">
            <div className="max-w-[587px] lg:w-[587px] h-[384px] flex flex-col items-start  px-6 py-8 bg-tableHeader rounded-[20px] ">
              <div className="flex items-center mb-8">
                <CircleArrowDown className="rotate-180 mr-3 size-6.5 text-statusCompleted" />
                <h2 className="text-subheading  text-textMuted">
                  Increasing Winnability
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {accountDetails.increasingWinnability.map((item, index) => (
                  <div key={index} className="flex items-center gap-6.5">
                    <div className="w-[43px] h-[43px] flex items-center justify-center rounded-full border border-statusCompleted text-sm text-statusCompleted">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col justify-between mb-1">
                        <span className="text-sm text-white">
                          {item.factor}
                        </span>
                        <div className="flex ">
                          <div className="flex  rounded-r-full h-[20px] w-[274px] ">
                            <div
                              className="bg-gradient-to-r rounded-r-full  from-[transpatent] to-statusCompleted h-[20px]"
                              style={{
                                width: `${item.persent}%`,
                              }}
                            />

                            <span className="text-sm ml-[15px] text-tableTextHead">
                              {item.value}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-[587px] lg:w-[587px] h-[384px] flex flex-col items-start  px-6 py-8 bg-tableHeader rounded-[20px] ">
              <div className="flex items-center mb-8">
                <CircleArrowDown className=" mr-3 size-6.5 text-statusPending" />
                <h2 className="text-subheading  text-textMuted">
                  Decreasing Winnability
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {accountDetails.decreasingWinnability.map((item, index) => (
                  <div key={index} className="flex items-center gap-6.5">
                    <div className="w-[43px] h-[43px] flex items-center justify-center rounded-full border border-statusPending text-sm text-statusPending">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col justify-between mb-1">
                        <span className="text-sm text-white">
                          {item.factor}
                        </span>
                        <div className="flex ">
                          <div className="flex  rounded-r-full h-[20px] w-[274px] ">
                            <div
                              className="bg-gradient-to-r  rounded-r-full  from-[transpatent] to-statusPending h-[20px]"
                              style={{
                                width: `${item.persent}%`,
                              }}
                            />

                            <span className="text-sm ml-[15px] text-tableTextHead">
                              {item.value}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-m-full flex flex-col items-start justify-between px-6 py-8 bg-tableHeader rounded-[20px] ">
            <div className="flex flex-row ">
              <Rocket className="text-[#3BB979] size-[26px] mr-2.5" />{" "}
              <p className="text-[#3BB979] text-subheading items-end">
                AI-Powered Recommendations
              </p>
            </div>
            {accountDetails.recommendations.map((item, index) => (
              <div key={index} className="flex flex-col lg:flex-row ">
                <div className="max-w-[850px] lg:mr-20">
                  <p className="text-textMuted text-label mb-2.5">
                    {item.title}
                  </p>
                  <p className="text-tableTextHead text-label ">
                    {item.description}
                  </p>
                </div>
                <button
                  type="button"
                  className="w-[177px] h-[58px] my-5  lg:my-0 items-center rounded-full border-none bg-[#3BB979] hover:bg-green-500"
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
