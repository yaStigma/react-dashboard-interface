import AccountComplianceSection from "../components/AccountComplianceSection";
import AccountNameSection from "../components/AccountNameSection";
import AccountPerformansSection from "../components/AccountPerformansSection";
import AccountPoliciesSection from "../components/AccountPoliciesSection";
import AccountStatusSection from "../components/AccountStatusSection";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import AccountPoliciesTableSection from "../components/AccountPoliciesTableSection";
import AccountCommunicationSection from "../components/AccountCommunicationSection";
import AccountDetailsSection from "../components/AccountDetailsSection";

export default function AccountPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/mockData.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <Loader />;
  const {
    performanceMetrics,
    policies,
    communication,
    accountDetails,
    policiesCard,
  } = data.account;

  return (
    <div className="flex flex-col gap-[17px]  w-[1656px] mx-auto">
      <div className="flex flex-row justify-start text-body  text-textPrimary">
        <p> Dashboard // Accounts // </p>
        <span className="text-cardBlue">Maritime Logistics Corp</span>
      </div>
      <AccountNameSection account={data.account} />
      <AccountPerformansSection performanceMetrics={performanceMetrics} />
      <AccountPoliciesSection policies={policies} />
      <div className="mt-[43px] flex gap-[17px] flex-col lg:flex-row">
        <AccountStatusSection />
        <AccountComplianceSection />
      </div>
      <AccountDetailsSection accountDetails={accountDetails} />
      <AccountCommunicationSection communication={communication} />
      <AccountPoliciesTableSection policiesCard={policiesCard} />
    </div>
  );
}
