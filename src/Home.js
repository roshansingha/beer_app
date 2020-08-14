import React from "react";
import Spinner from "./Spinner";
import Item from "./Item";
import "./Home.css";

function Home({ items, isLoading }) {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </section>
  );
}

export default Home;
