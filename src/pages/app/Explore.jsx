import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../../styles/components/explore.module.scss";
import { searchUser } from "../../features/usuarios/utilsSlice";

const Explore = () => {
  // State
  const [search, setSearch] = useState("");

  // Redux
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchParsed = search.trim().split(" ").join("-");
    console.log(searchParsed);

    dispatch(searchUser({ search }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
            results="0"
          />
        </div>
      </form>
    </div>
  );
};

export default Explore;
