import React from "react";
import styles from "./SideMenu.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface SideMenuProps {
  isOpen: boolean;
}

const SideMenu = ({ isOpen }: SideMenuProps) => {
  return (
    <div className={`${styles.sideMenu} ${isOpen ? `${styles.open}` : ""}`}>
      <ul className={styles.customList}>
        <li>Visit</li>
        <li>Events</li>
        <li>About Us</li>
        <li>Business Resources</li>
        <FaMagnifyingGlass className={styles.searchIcon} />
        <br />
        <button className={`noStyleButt ${styles.donateButt}`}>DONATE</button>
      </ul>
    </div>
  );
};

export default SideMenu;
