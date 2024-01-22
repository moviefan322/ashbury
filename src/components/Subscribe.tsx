import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className="container bg-dark d-flex flex-column align-items-center">
      <div className={styles.form}>
        <h6>SUBSCRIBE</h6>
        <p>Sign up with your email address to receive news and updates.</p>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email Address" />
        <button className="noStyleButt orangeButt">SIGN UP</button>
      </div>
    </div>
  );
};

export default Subscribe;
