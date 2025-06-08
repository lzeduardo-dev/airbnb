import React from "react";
import Item from "../Components/Item";
const Home = () => {
  return (
    <section>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))]  px-8 py-4 gap-8  max-w-6xl mx-auto">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </section>
  );
};

export default Home;
