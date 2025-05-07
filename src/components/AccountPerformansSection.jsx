export default function AccountPerformansSection({ performanceMetrics }) {
  if (!performanceMetrics || performanceMetrics.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <section className="w-full h-[710px] flex flex-col items-start mt-[38px]">
      <h2 className="text-heading font-heading leading-heading text-textMuted mb-7 ">
        Performans Metrics
      </h2>
      <div className="flex gap-[17px]">
        <div className="w-[377px] h-[239px] flex flex-col items-start px-[25px] pt-[40px] pb-[20px]  rounded-[20px] border  border-cardBorder bg-cardLight">
          <div className="flex gap-[17px] mb-5">
            <p className="text-subheading  text-textMuted ">Winnability</p>{" "}
            <div className="inline-flex items-center ">
              <div className="size-2.5 rounded-full bg-gradientfrom mr-1"></div>
              <div className="size-2.5 rounded-full  bg-gradientfrom mr-1"></div>
              <div className="size-2.5 rounded-full  bg-gradientfrom mr-1"></div>
              <div className="size-2.5 rounded-full  bg-gradientfrom mr-1"></div>
            </div>
          </div>
          <p className="text-textMuted text-[50px]">
            {performanceMetrics.winnability}
          </p>{" "}
          <a href="#" className="text-body text-cardBlue mt-10">
            See all factors →
          </a>
        </div>
        <div className="w-[377px] h-[239px] flex flex-col items-start px-[25px] pt-[40px] pb-[20px]  rounded-[20px] border  border-cardBorder bg-cardLight">
          <p className="text-subheading  text-textMuted mb-5">Loss Ratio</p>
          <div className="flex items-end">
            <p className="text-textMuted  text-[50px] mr-2.5">
              {performanceMetrics.lossRatio}
            </p>{" "}
            <p className="text-subheading leading-subheading pb-3 text-tableTextHead">
              vs {performanceMetrics.targetPercent} target
            </p>
          </div>
          <a href="#" className="text-body text-cardBlue mt-10">
            View history →
          </a>
        </div>
        <div className="w-[377px] h-[239px] flex flex-col items-start px-[25px] pt-[40px] pb-[20px]  rounded-[20px] border  border-cardBorder bg-cardLight">
          <p className="text-subheading  text-textMuted mb-5">Premium Growth</p>
          <div className="flex items-end">
            <p className="text-textMuted  text-[50px] mr-2.5">
              {performanceMetrics.premiumGrowth}
            </p>{" "}
            <p className="text-subheading leading-subheading pb-3 text-tableTextHead">
              YoY increase
            </p>
          </div>
          <p className="text-subheading leading-subheading text-tableTextHead">
            {performanceMetrics.revenue} vs {performanceMetrics.target} Target
          </p>
          <a href="#" className="text-body text-cardBlue mt-3">
            View history →
          </a>
        </div>
        <div className="w-[471px] h-[200px] flex flex-col items-start pl-[25px] pt-[40px] pb-[20px]  rounded-[20px] border  border-cardBorder bg-cardLight ">
          <p className="text-subheading  text-textMuted mb-5">
            Exposure Distribution
          </p>
          <div className="flex gap-[23px] mb-3">
            <div>
              <div className="bg-cardBorder rounded-r-full h-[22px] w-[234px]">
                <div
                  className="bg-gradient-to-r rounded-r-full from-[transpatent] to-[#3B82F6] h-[22px]"
                  style={{ width: `${performanceMetrics.marineCargo}%` }}
                />
              </div>
            </div>
            <p className="text-label text-textMuted">
              Marine Cargo: {performanceMetrics.marineCargo}%
            </p>
          </div>
          <div className="flex gap-[23px] mb-3">
            <div>
              <div className="bg-cardBorder rounded-r-full h-[22px] w-[234px]">
                <div
                  className="bg-gradient-to-r rounded-r-full from-[transpatent] to-[#3B82F6] h-[22px]"
                  style={{ width: `${performanceMetrics.generalLiability}%` }}
                />
              </div>
            </div>
            <p className="text-label text-textMuted">
              General Liability: {performanceMetrics.generalLiability}%
            </p>
          </div>
          <div className="flex gap-[23px]">
            <div>
              <div className="bg-cardBorder rounded-r-full h-[22px] w-[234px]">
                <div
                  className="bg-gradient-to-r rounded-r-full from-[transpatent] to-[#3B82F6] h-[22px]"
                  style={{ width: `${performanceMetrics.workersComp}%` }}
                />
              </div>
            </div>
            <p className="text-label text-textMuted">
              Workers Comp: {performanceMetrics.workersComp}%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
