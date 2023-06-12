import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addSearchString } from "../utils/categorySlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const handleItemClick = (itemName) => {
    console.log(`Clicked on ${itemName}`);
    dispatch(addSearchString(itemName));
    // Add your logic here for handling the item click
  };

  // Early Return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="dark:bg-slate-800 dark:text-yellow-50 p-5 shadow-lg w-48">
      <div>
        <ul>
          <li onClick={() => handleItemClick("trending in india")}>
            <NavLink
              to="/"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li onClick={() => handleItemClick("trending Shorts in india")}>
            <NavLink
              to="/"
              activeClassName="activeNavLink"
            >
              Shorts
            </NavLink>
          </li>
          <li onClick={() => handleItemClick("trending Live videos in india")}>
            <NavLink
              to="/"
              activeClassName="activeNavLink"
            >
              Live
            </NavLink>
          </li>
          <li onClick={() => handleItemClick("trending JavaScript videos")}>
            <NavLink
              to="/"
              activeClassName="activeNavLink"
            >
              JavaScript
            </NavLink>
          </li>
        </ul>
      </div>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
