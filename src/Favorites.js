import React from "react";
import { useStateValue } from "./StateProvider";
import "./checkout.css";
import CheckoutFavorites from "./CheckoutFavorites";

function Favorites() {
  const [{ favorite }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        {favorite.length === 0 ? (
          <h2>Your Cart is Empty!!!</h2>
        ) : (
          <div>
            <h2 className="checkout_title">Your Favorites contains:</h2>
            <p className="checkout_line"></p>
            {favorite.map((item) => (
              <CheckoutFavorites
                id={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
