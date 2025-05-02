import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import Navigation from "./Navigation";
export default function Layout() {
  return (
    <div className="bg-background flex flex-col min-h-screen custom-scroll">
      <div className="w-full  max-w-[1920px] mx-auto ">
        <Header />
        <Navigation />
        <main className=" w-full flex jastify-center custom-scroll h-full overflow-y-auto">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
