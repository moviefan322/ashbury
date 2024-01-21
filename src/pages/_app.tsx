import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/bootstrap.scss";
import "@/styles/globals.css";
import { useState } from "react";
import DesktopNavBar from "@/components/DesktopNavBar";
import MobileNavBar from "@/components/MobileNavBar";
import SideMenu from "@/components/SideMenu";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import styles from "./_app.module.css";

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Update the state to the current window width after mounting
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (typeof windowWidth === "undefined") {
    return null;
  }

  return (
    <>
      <div
        className={`${styles.pageContainer} ${
          menuOpen ? `${styles.slide}` : ""
        }`}
      >
        {windowWidth > 868 ? (
          <DesktopNavBar />
        ) : (
          <MobileNavBar toggleMenu={toggleMenu} isMenuOpen={menuOpen} />
        )}
        <Component {...pageProps} />
      </div>
      {windowWidth < 868 ? <SideMenu isOpen={menuOpen} /> : null}
    </>
  );
}
