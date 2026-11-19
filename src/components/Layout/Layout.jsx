import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBanner from "../TopBanner/TopBanner";
import Navbar from "../Navbar/Navbar";
import CallToAction from "../CallToAction/CallToAction";
import Footer from "../Footer/Footer";
import "./Layout.css";

// In pages par "Need Help?" band nahi dikhega
const HIDE_CTA_ON = [];

export default function Layout() {
  const { pathname } = useLocation();

  // page badalne par upar se start ho
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="layout">
      <TopBanner />
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      {!HIDE_CTA_ON.includes(pathname) && <CallToAction />}
      <Footer />
    </div>
  );
}