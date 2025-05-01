import { Route, Routes, Navigate } from "react-router";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
const Dashboard = lazy(() => import("./pages/DashboardPage"));
const AccountGeneral = lazy(() => import("./pages/AccountPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<AccountGeneral />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
