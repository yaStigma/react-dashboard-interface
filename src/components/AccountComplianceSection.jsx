import { CircleCheck } from "lucide-react";
const items = [
  "KYC verification",
  "Required Documentation",
  "Regulatory approval",
  "Financial Verification",
];
export default function AccountComplianceSection() {
  return (
    <section className="w-full h-full flex flex-col items-start">
      <div className="flex  gap-[17px] items-center mb-4.5">
        <h2 className="text-heading font-heading leading-heading text-textMuted  ">
          Compliance & Documentation
        </h2>
        <a href="#" className="text-body text-cardBlue pt-2">
          See hostory →
        </a>
      </div>
      <div>
        <div className="w-[673px] h-[159px] flex  items-center py-[28px] px-[40px]   rounded-[20px] border  border-cardBorder bg-cardLight">
          <div className="grid grid-cols-2 gap-y-8 gap-x-8">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CircleCheck className="size-5 mr-3 text-[#3BB979]" />
                <span className="text-textMuted text-label">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
