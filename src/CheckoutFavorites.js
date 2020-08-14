import React from "react";
import "./checkoutFavorites.css";
import { useStateValue } from "./StateProvider";

function CheckoutFavorites({ id, image, description, name }) {
  const [{}, dispatch] = useStateValue();
  const removeFromFavorite = () => {
    dispatch({
      type: "REMOVE_FROM_FAVORITE",
      id: id,
    });
  };
  return (
    <div className="checkoutProducts">
      <img className="checkoutProducts_image" src={image} alt="" />
      <div className="checkoutProducts_info">
        <h3 className="checkoutProduct">{name}</h3>
        <p className="checkoutProduct">{description}</p>
        <button onClick={removeFromFavorite}>Remove from Favorite </button>
      </div>
    </div>
  );
}

export default CheckoutFavorites;
