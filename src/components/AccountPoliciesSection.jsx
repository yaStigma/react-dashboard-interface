import {
  Ship,
  Building2,
  Umbrella,
  ShieldCheck,
  ShieldUser,
} from "lucide-react";

const iconMap = {
  "Marine Cargo": <Ship className="size-7 text-[#3B82F6]" />,
  "General Liability": <ShieldCheck className="size-7 text-[#3BB979]" />,
  "Workers Comp": <ShieldUser className="size-7 text-[#6A3BF6]" />,
  Prorerty: <Building2 className="size-7 text-[#FDD261]" />,
  Umbrella: <Umbrella className="size-7 text-[#B93B3B]" />,
};

export default function AccountPoliciesSection({ policies }) {
  if (!policies || policies.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <section className="w-full  flex flex-col items-start mt-[81px] ">
      <h2 className="text-heading font-heading leading-heading text-textMuted mb-5 ">
        Policies
      </h2>

      <div className=" grid grid-cols-2 gap-4 lg:flex-row lg:flex lg:gap-4    overflow-y-hidden  items-start py-[19.5px] px-[35px]   rounded-[20px] border  border-cardBorder bg-cardLight">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="w-[311px] h-[135px] flex flex-col items-start justify-between px-6 py-8 bg-tableHeader rounded-[20px] "
          >
            <div className="flex items-center gap-2">
              {iconMap[policy.name]}
              <p className="text-textMuted text-subheading">{policy.name} </p>
            </div>
            <p className="text-label  text-tableTextHead">
              Premium: {policy.premium}
            </p>
            <p className="text-label  text-tableTextHead">
              Eff.Date: {policy.effDate}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
