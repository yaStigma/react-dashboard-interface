import AccountComplianceSection from "../components/AccountComplianceSection";
import AccountNameSection from "../components/AccountNameSection";
import AccountPerformansSection from "../components/AccountPerformansSection";
import AccountPoliciesSection from "../components/AccountPoliciesSection";
import AccountStatusSection from "../components/AccountStatusSection";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

export default function AccountPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/mockData.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <Loader />;
  const { performanceMetrics, policies } = data.account;

  return (
    <div className="flex flex-col gap-[17px]  w-[1656px] mx-auto">
      <div className="flex flex-row justify-start text-body  text-textPrimary">
        <p> Dashboard // Accounts // </p>
        <span className="text-cardBlue">Maritime Logistics Corp</span>
      </div>
      <AccountNameSection account={data.account} />
      <AccountPerformansSection performanceMetrics={performanceMetrics} />
      <AccountPoliciesSection policies={policies} />
      <div className="mt-[43px] flex gap-[17px]">
        <AccountStatusSection />
        <AccountComplianceSection />
      </div>
    </div>
  );
}
