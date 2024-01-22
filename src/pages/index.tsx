import React from "react";
import Carousel from "@/components/Carousel";
import Greetings from "@/components/Greetings";
import News from "@/components/News";
import Upcoming from "@/components/Upcoming";
import OpenBiz from "@/components/OpenBiz";

export default function Home() {
  return (
    <>
      <Carousel />
      <Greetings />
      <hr className="w-75 mx-auto" />
      <News />
      <Upcoming />
      <hr className="w-75 mx-auto" />
      <OpenBiz />
    </>
  );
}
