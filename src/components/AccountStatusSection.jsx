import { CircleCheck } from "lucide-react";

const steps = [
  { name: "Submitted", completed: true },
  { name: "Review", completed: true },
  { name: "Quote", completed: true },
  { name: "Bind", completed: true },
  { name: "Issue", completed: true },
  { name: "Renew", completed: false },
];

export default function AccountStatusSection() {
  return (
    <section className="w-full h-full flex flex-col items-start">
      <h2 className="text-heading font-heading leading-heading text-textMuted mb-4.5 ">
        Account Status
      </h2>
      <div>
        <div className="w-[960px] h-[159px] flex  items-center py-[28px] px-[40px]   rounded-[20px] border  border-cardBorder bg-cardLight  justify-between   mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center ">
                <div className="flex flex-col items-center">
                  {step.completed ? (
                    <CircleCheck className="size-[35px] text-[#3BB979]" />
                  ) : (
                    <CircleCheck className="size-[35px] text-[#8A8B98]" />
                  )}
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`h-px w-28 border-t border-dotted mx-2 ${
                      steps[index + 1].completed
                        ? "border-[#3BB979]"
                        : "border-[#8A8B98]"
                    }`}
                  />
                )}
              </div>
              <span className="text-textMuted text-labelLg pt-5">
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
