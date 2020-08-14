import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Search from "./Search";
import Login from "./Login";
import Favorites from "./Favorites";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //console.log("USER IS>>>", user);

  useEffect(() => {
    const fetchItems = async () => {
      //console.log("FETCH");
      console.log(query);
      var result;
      if (query == "") {
        result = await axios(
          `https://api.punkapi.com/v2/beers?page=2&per_page=80`
        );
      } else {
        result = await axios(
          `https://api.punkapi.com/v2/beers?beer_name=${query}`
        );
      }
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/signOut">
            <Login />
          </Route>
          <Route path="/favorites">
            <Header />
            <Favorites />
          </Route>
          <Route path="/">
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <Home isLoading={isLoading} items={items} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
