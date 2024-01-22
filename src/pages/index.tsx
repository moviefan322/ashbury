import React from "react";
import Carousel from "@/components/Carousel";
import Greetings from "@/components/Greetings";
import News from "@/components/News";
import Upcoming from "@/components/Upcoming";

export default function Home() {
  return (
    <>
      <Carousel />
      <Greetings />
      <hr className="w-75 mx-auto" />
      <News />
      <Upcoming />
    </>
  );
}
