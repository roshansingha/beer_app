import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ favorite, user }] = useStateValue();
  return (
    <nav className="header">
      <h4>Beans Love Beers</h4>
      <div className="header__nav">
        <Link to="/signOut" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">Sign Out</span>
          </div>
        </Link>
        <Link to="/favorites" className="header__link">
          <div className="header__optionFav">
            <FavoriteIcon />
            <span className="header__optionLineTwo header__favCount">
              {favorite?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
