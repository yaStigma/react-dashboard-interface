import { Route, Routes } from "react-router";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
const Dashboard = lazy(() => import("./pages/DashboardPage"));
const AccountGeneral = lazy(() => import("./pages/AccountPage"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/account" element={<AccountGeneral />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
