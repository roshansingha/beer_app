import React from "react";
import "./Item.css";
import { useStateValue } from "./StateProvider";
import TextTruncate from "react-text-truncate";

function Item({ item }) {
  const [{}, dispatch] = useStateValue();
  const addToFavorite = () => {
    //add item to fav..
    dispatch({
      type: "ADD_TO_FAVORITE",
      item: {
        id: item.id,
        name: item.name,
        description: item.description,
        image: item.image_url,
      },
    });
  };
  return (
    <div className="card">
      <div className="card__info">
        <h3>{item.name}</h3>
        <TextTruncate
          line={3}
          element="p"
          truncateText="..."
          text={item.description}
        />
      </div>
      <img src={item.image_url} alt="" />
      <button onClick={addToFavorite}>Add to Favorites</button>
    </div>
  );
}

export default Item;
