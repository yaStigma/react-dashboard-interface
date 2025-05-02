export default function MarketIntelligenceSection() {
  return (
    <section className="w-[285px] h-[272px] flex flex-col items-start p-[25px] rounded-[20px] border  border-cardBorder bg-cardLight">
      <h2 className="text-subheading font-subheading leading-subheading text-textMuted mb-[9px] ">
        Market Intelligence
      </h2>
      <ul>
        <li className="flex items-start text-textPrimary text-label font-body border-b-1 border-cardBorder py-2.5">
          <div className="w-4 h-4 block mr-[9px] rounded-full bg-statusFailed shrink-0"></div>
          <p>Rite hardening in Cyber marker -+15% YoY</p>
        </li>
        <li className="flex items-start text-textPrimary text-label font-body border-b-1 border-cardBorder py-2.5 ">
          <div className="w-4 h-4 block mr-[9px] rounded-full bg-statusPending shrink-0"></div>
          <p>New capacity entering Marine market</p>
        </li>
        <li className="flex items-start text-textPrimary text-label font-body border-b-1 border-cardBorder py-2.5 ">
          <div className="w-4 h-4 block mr-[9px] rounded-full bg-statusNew shrink-0"></div>
          <p>Environmental regulatory changes in CA</p>
        </li>
      </ul>
    </section>
  );
}
