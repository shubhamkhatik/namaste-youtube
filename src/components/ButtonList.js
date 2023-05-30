import React, { useEffect, useState } from "react";
import Button from "./Button";
import { CATEGORY_ID_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addName,categoryMode ,addSearchString} from "../utils/categorySlice";

const ButtonList = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.name);

  useEffect(() => {
    async function AllCategory() {
      const data = await fetch(CATEGORY_ID_URL);
      const jsonData = await data.json();
      dispatch(addName(jsonData.items));
    }
    AllCategory();
  }, []);

  function displayCategoryData (searchString){
    dispatch(categoryMode(true))
    dispatch(addSearchString(searchString))
  }

  return (
    <div className="dark:bg-slate-800 dark:text-yellow-50 w-full flex overflow-x-scroll overflow-hidden">
    
    
      {category.map((name) => (
        <Link key={name.id} to="/"
        onClick={()=>displayCategoryData(name.snippet.title)}
        >
          <Button name={name.snippet.title} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;
