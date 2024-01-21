// import "bootstrap/dist/css/bootstrap.min.css";
// import "@/styles/bootstrap.scss";
import "@/styles/globals.css";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import SideMenu from "@/components/SideMenu";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import styles from "./_app.module.css";

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);

  return (
    <>
      <div
        className={`${styles.pageContainer} ${
          menuOpen ? `${styles.slide}` : ""
        }`}
      >
        <NavBar toggleMenu={toggleMenu} isMenuOpen={menuOpen} />
        <Component {...pageProps} />
      </div>
      <SideMenu isOpen={menuOpen} />
    </>
  );
}
