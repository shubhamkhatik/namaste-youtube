import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import useMy from "../hooks/useMy";
import { cacheResults } from "../utils/searchSlice";
import { YOUTUBE_SUGGESTION_API } from "../utils/constant";
import { addSearchString } from "../utils/categorySlice";

import { useNavigate } from "react-router-dom";

const Head = () => {
  useMy(); //its a data handling hook
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // ==================search code =======================
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cachedSearch = useSelector((store) => store.search);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (cachedSearch[searchQuery]) {
        setSuggestions(cachedSearch[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 210);
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const jsonData = await data.json();
    setSuggestions(jsonData[1]);
    dispatch(
      cacheResults({
        [searchQuery]: jsonData[1],
      })
    );
  };

  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" && searchQuery?.length > 0) {
      dispatch(addSearchString(searchQuery));
      navigate(`/sarchResult/?query=${searchQuery}`);
    }
  };
  return (
    <div className=" dark:bg-slate-800 grid grid-flow-col p-5  shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
            onFocus={() => {
              searchQuery && setShowSuggestions(true);
            }}
            onBlur={() =>
              setTimeout(() => {
                setShowSuggestions(false);
              }, 200)
            }
          />
          <button
            className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
            onClick={() => {
              if (searchQuery.length > 0) {
                dispatch(addSearchString(searchQuery));
                navigate(`/sarchResult/?query=${searchQuery}`);
              }
            }}
          >
            🔍
          </button>
        </div>
      </div>
      {showSuggestions && (
        <div className="bg-white  absolute top-[4.5rem] w-[37rem] py-2 px-4  ml-20 font-semibold rounded-xl drop-shadow-2xl dark:text-gray-100 dark:bg-black">
          {suggestions.length > 0 ? (
            <ul>
              {suggestions.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="py-1 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchQuery(item);
                      dispatch(addSearchString(searchQuery));
                      navigate(`/sarchResult/?query=${searchQuery}`);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No suggestions found</p>
          )}
        </div>
      )}
      <div className="col-span-1 flex">
        {theme === "light" ? (
          <img
            className="h-8 mx-4 w-10 cursor-pointer"
            onClick={themeHandler}
            src="https://images.theconversation.com/files/397026/original/file-20210426-23-dhor35.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            alt="moon"
          />
        ) : (
          <img
            className="h-8 mx-4 w-10 cursor-pointer"
            onClick={themeHandler}
            src="https://cdn4.vectorstock.com/i/1000x1000/81/78/sun-theme-image-3-vector-21588178.jpg"
            alt="sun"
          />
        )}
        <img
          className="h-8"
          alt="profile"
          src="https://static.vecteezy.com/system/resources/previews/010/056/184/original/people-icon-sign-symbol-design-free-png.png"
        />
      </div>
    </div>
  );
};

export default Head;
