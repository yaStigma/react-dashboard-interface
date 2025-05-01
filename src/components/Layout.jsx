import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import Navigation from "./Navigation";
export default function Layout() {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <div className="w-full max-w-[1920px] mx-auto ">
        <Header />
        <Navigation />
        <main className="flex-1 p-4 overflow-auto">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
