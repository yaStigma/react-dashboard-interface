import { CircleAlert } from "lucide-react";

export default function AccountNameSection({ account }) {
  if (!account || account.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <section className="w-full h-full flex flex-col-reverse lg:flex-row  mx-auto">
      <div className="flex flex-row items-end mt-5 ">
        <img
          className="mr-5"
          src="/iconMaritimeLogisticsCorp.svg"
          alt="icon Company"
        />
        <div>
          <h2 className="text-kpi font-kpi leading-kpi text-textPrimary mb-3 ">
            {account.name}
          </h2>
          <div className="mr-17.5">
            <ul className="flex flex-row text-body text-textPrimary ">
              <li className="w-[250px] pr-2.5 border-r-1 border-cardBorder">
                {account.address}
              </li>
              <li className="px-2.5 border-r-1 w-[188px] border-cardBorder">
                <p className="text-tableTextHead ">EXISTING ACCOUNT</p>
                <p>{account.existingAccount}</p>
              </li>
              <li className="px-2.5 border-r-1 w-[188px] border-cardBorder">
                <p className="text-tableTextHead">BROKER</p>
                <p>{account.broker}</p>
              </li>
              <li className="px-2.5 ">
                <p className="text-tableTextHead">UNDERWRITER</p>
                <p>{account.underwriter}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[710px] h-[149px] flex flex-col align-between p-[21px] rounded-[20px] border  border-statusPending bg-cardLight">
        <p className="text-statusPending text-subheading leading-subheading flex items-center mb-4">
          <CircleAlert className="size-5 mr-3" />
          Needs Attention
        </p>
        <div className="flex gap-[30px]">
          <div>
            <p className="text-labelLg text-textMuted ">
              Marine Survey Required
            </p>
            <p className="text-body text-tableTextHead ">
              Scheduled for 06/12/2025
            </p>
            <a href="#" className="text-body text-cardBlue">
              Review details link →
            </a>
          </div>
          <div>
            <p className="text-labelLg text-textMuted ">
              Loss Control Complete
            </p>
            <p className="text-body text-tableTextHead ">
              Last inspection: 02/15/2025
            </p>
            <a href="#" className="text-body text-cardBlue">
              View report →
            </a>
          </div>
          <div>
            <p className="text-labelLg text-textMuted ">
              Claims Review Required
            </p>
            <p className="text-body text-tableTextHead ">
              3 open claims // $245,000 TTL
            </p>
            <a href="#" className="text-body text-cardBlue">
              View claims →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
