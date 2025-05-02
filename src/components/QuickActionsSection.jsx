export default function QuickActionsSection() {
  return (
    <section className="w-[285px] h-[264px] flex flex-col items-start p-[25px] rounded-[20px] border  border-cardBorder bg-cardLight">
      <h2 className="text-subheading font-subheading leading-subheading text-textMuted mb-5 ">
        Quick Actions
      </h2>
      <div className="flex flex-col gap-[5px]">
        <button className="bg-cardBlue text-textPrimary w-[240px] h-[40px] text-labelSm rounded-full border-none hover:bg-gradientfrom transition duration-200">
          New Submission
        </button>
        <button className="bg-cardBlue text-textPrimary w-[240px] h-[40px] text-labelSm rounded-full border-none hover:bg-gradientfrom transition duration-200">
          Quote Builder
        </button>
        <button className="bg-cardBlue text-textPrimary w-[240px] h-[40px] text-labelSm rounded-full border-none hover:bg-gradientfrom transition duration-200">
          Risks Models
        </button>
        <button className="bg-cardBlue text-textPrimary w-[240px] h-[40px] text-labelSm rounded-full border-none hover:bg-gradientfrom transition duration-200">
          New Submission
        </button>
      </div>
    </section>
  );
}
