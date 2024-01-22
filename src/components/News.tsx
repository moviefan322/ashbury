/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./News.module.css";
import Image from "next/image";

const News = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h4 className={`${styles.newsh4} mb-5`}>NEWS AND PROMOTIONS</h4>
      <div className="d-flex row mx-auto">
        <div className="col-md-3 d-flex flex-column align-items-center">
          <Image
            className="mb-3"
            src="/artisan.jpeg"
            height={220}
            width={260}
            alt="artisan crafting"
          />
          <h4 className={styles.newsHead}>
            ASBURY PARK'S CREATIVE COLLECTIVE POP-UP CALENDAR FOR JAN/FEB IS NOW
            AVAILABLE
          </h4>
          <p>
            Vendor Opportunity: Reserve your spot at Asbury Park's Creative
            Collective Pop-Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;

// Asbury Park's Creative Collective Pop-Up Calendar for Jan/Feb is Now Available
// ASBURY PARK'S CREATIVE COLLECTIVE POP-UP CALENDAR FOR JAN/FEB IS NOW AVAILABLE
// Vendor Opportunity: Reserve your spot at Asbury Park's Creative Collective Pop-Up

// Read More →
// Jan 2, 2024

// Boardwalk Beans Listed Among NJ.com's Best Coffee Shops in NJ
// BOARDWALK BEANS LISTED AMONG NJ.COM'S BEST COFFEE SHOPS IN NJ
// Kudos to Boardwalk Beans for making the list!

// Read More →
// Dec 5, 2023

// Seaside Greenery Celebrates Its Grand Opening on Fri Dec 1st
// SEASIDE GREENERY CELEBRATES ITS GRAND OPENING ON FRI DEC 1ST
// Join the celebration at Seaside Greenery's GRAND OPENING!

// Read More →
// Nov 28, 2023

// ASBURY PARK WELCOMES THE CREATIVE COLLECTIVE
// The Creative Collective in Asbury Park will host an exclusive preview of their innovative new space at 123 Ocean Avenue on Saturday from 10am to 7pm. The Creative Collective offers a unique collaborative retail environment to support local artisans and entrepreneurs. The community is invited to discover, shop, and engage with local vendors while learning about their unique crafts and the vision behind The Creative Collective.
