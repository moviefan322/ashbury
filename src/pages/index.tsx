import React from "react";
import Carousel from "@/components/Carousel";
import Greetings from "@/components/Greetings";

export default function Home() {
  return (
    <>
      <Carousel />
      <Greetings />
      <hr className='w-75 mx-auto' />
      <h1>Poop</h1>
    </>
  );
}
