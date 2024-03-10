import React, { useRef, useState,useEffect } from "react";
import SideNav from "./SideNav";
import Table from "./Table";

function Main() {
  const [selectedButton, setSelectedButton] = useState("all");
  const [sort, setSort] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef(null);


  const toggleSideNav = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClick = (id) => {
    if (id === "sort") {
      setSort((prevSort) => !prevSort);
      setSelectedButton("sort");
    } else {
      setSelectedButton(id);
      setSort(false);
    }
  };

  const handleInputSearch = (e) => {
    setSearchInput(e.target.value);
  };
  const handleCancelSearch = () => {
    setSearchInput("");
  };

  const handleClickOutside = (event) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`flex`}>
      <SideNav isOpen={isOpen}/>

      <div className="md:m-2 md:w-[980px] w-screen p-1 md:p-2 border rounded">
        <div className="flex justify-between  border rounded md:p-2">
          <div className="flex">
            <div className=" block cursor-pointer " onClick={toggleSideNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list mt-1 "
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </div>
            <h1 className="font-bold mx-1 mx-2">Products</h1>
          </div>

          <div className="flex ">
          <div class="relative">
  <input
    class="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full md:py-2 py-1 mb-1 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
    id="username"
    type="text"
    placeholder="Search brands"
    onChange={handleInputSearch}
    value={searchInput}
  />
  <div class="absolute right-0 inset-y-0 flex items-center" onClick={handleCancelSearch}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div>

  <div class="absolute left-0 inset-y-0 flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="currentColor"
              class="bi bi-chat-left mt-2 mx-2 cursor-pointer hover:border"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-gear mt-2 mx-2 cursor-pointer hover:border"
              viewBox="0 0 16 16"
            >
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
            </svg>
          </div>
        </div>

        <div className="md:flex md:justify-between flex  border rounded md:mt-1">
          <div className="flex">
            <div
              className={`flex  items-center text-xs md:sm border rounded md:mx-3 shadow shadow-lg md:m-1 md:p-1 cursor-pointer px-1 ${
                selectedButton === "all" ? "bg-black text-white " : ""
              }`}
              onClick={() => handleClick("all")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                class="bi bi-columns-gap md:mt-0  "
                viewBox="0 0 16 16"
              >
                <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" />
              </svg>
              <h1 id="all" className="text-xs md:sm md:mx-1">
                All
              </h1>
            </div>

            <div id="desk"
              className={`border text-xs md:sm rounded md:mx-3 shadow shadow-lg mx-1 p-0.5 m-0.5 md:pt-1.5 cursor-pointer ${
                selectedButton === "desk" ? "bg-black text-white " : ""
              }`}
              onClick={() => handleClick("desk")}>
            <h1>
              Desk
            </h1>
            </div>

          <div id="tags"
              className={`border text-xs mx-0.5 md:sm rounded md:mx-3 shadow shadow-lg md:m-1 md:p-1 mx-1 m-0.5 p-0.5 cursor-pointer  ${
                selectedButton === "tags" ? "bg-black text-white " : ""
              }`}
              onClick={() => handleClick("tags")}>
          <h1>
              Tags
            </h1>
          </div> 
           
            <div
              className={`flex border text-xs md:sm  rounded md:mx-3 shadow shadow-lg mx-1 md:pt-1.5 p-0.5 m-0.5 cursor-pointer  ${
                selectedButton === "sort" ? "bg-black text-white " : ""
              }`}
              onClick={() => handleClick("sort")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-sort-alpha-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371zm1.57-.785L11 2.687h-.047l-.652 2.157z"
                />
                <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293z" />
              </svg>{" "}
              <h1 id="sort">Sort</h1>
            </div>
            <div
              className={`flex border text-xs md:sm rounded md:mx-3 shadow shadow-lg mx-1 md:pt-1.5 p-0.5 m-0.5 cursor-pointer  ${
                selectedButton === "filter" ? "bg-black text-white " : ""
              }`}
              onClick={() => handleClick("filter")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-funnel "
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
              </svg>
              <h1 id="filter">Filter</h1>
            </div>
          </div>
          <div className="flex ">
            <h1 className="border text-xs md:sm rounded md:mx-3 md:pt-1.5 mx-1 p-0.5 m-0.5 shadow shadow-lg  cursor-pointer hover:bg-gray-200">
              Meeting
            </h1>
            <h1 className="border text-xs md:sm rounded md:mx-3 md:pt-1.5 mx-1 p-0.5 m-0.5 shadow shadow-lg  cursor-pointer hover:bg-gray-200">
              Imp/Exp
            </h1>
          </div>
        </div>
        <div>
          <Table sort={sort} searchInput={searchInput} />
        </div>
      </div>
    </div>
  );
}

export default Main;
