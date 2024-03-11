import React, { useState, useEffect } from "react";
import { TableData } from "./TableData";

function Table({ sort, searchInput }) {
  
  const [data, setData] = useState(TableData);

  const [selectCount, setSelectCount] = useState(0);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (sort) {
      setData((prevData) => {
        const sortedData = [...prevData];
        sortedData[0].brands.sort((a, b) => a.name.localeCompare(b.name));
        return sortedData;
      });
    }
  }, [sort]);
  const handleSelectCount = (e) => {
    let isChecked = e.target.checked;
    setCheck(isChecked);

    setSelectCount((val) => (isChecked ? val + 1 : val - 1));
  };

  // filter the search data
  const filteredData = data[0].brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="md:mt-4 ">
      <div className=" overflow-x-auto max-h-table">
        <table className="table-auto">
          <thead className="border rounded">
            <tr>
              <th className="border  text-sm">Brand</th>
              <th className="border  text-sm">Description</th>
              <th className="border  text-sm">Members</th>
              <th className="border  text-sm">Categories</th>
              <th className="border  text-sm">Tags</th>
              <th className="border  text-sm">Next Meetings</th>
              <th className="border p-2">
                <button>+</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {(searchInput.length > 0 ? filteredData : data[0].brands).map(
              (brand, index) => (
                <tr key={index} className="border">
                  <div className="flex items-center p-1 md:p-0">
                    <div>
                      <td>
                        <input
                          onChange={handleSelectCount}
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                      </td>
                    </div>
                    <div>
                      <td>
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="w-[25px] md:mx-3 border rounded"
                        />
                      </td>
                    </div>
                    <div>
                      <td className="md:text-sm text-xs">{brand.name}</td>
                    </div>
                  </div>
                  <td className="border md:text-sm text-xs p-1">
                    {brand.description.slice(0, 20)}...
                  </td>
                  <td className="border">
                    <div className="flex mx-2">
                      {brand.members.map((url, i) => (
                        <img key={i} src={url} alt="pr" className="w-[15px]" />
                      ))}
                    </div>
                  </td>
                  <td className="border">
                    <div className="flex mx-1  p-0.5">
                      {brand.categories.map((category, i) => (
                        <div key={i} className="">
                          <button className="md:text-sm text-xs border border-black bg-purple-300 rounded p-1 mx-0.5 mx-1">
                            {category}
                          </button>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="border">
                    <div className="flex">
                      {brand.tags.map((category, i) => (
                        <div key={i} className="">
                          <button className="md:text-sm text-xs px-1 border border-black md:p-[2px] bg-orange-300 rounded mx-1">
                            {category}
                          </button>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="border">
                    <div
                      className={`md:text-sm text-xs border-[1.5px] md:mx-3 text-center p-0.5  border-black rounded ${
                        brand.nextMeeting === "Today" ||
                        brand.nextMeeting === "1 hour" ||
                        brand.nextMeeting === "30 minutes"
                          ? "bg-red-400  border-black "
                          : "bg-green-400"
                      }`}
                    >
                      <button>{brand.nextMeeting}</button>
                    </div>
                  </td>
                </tr>
              )
            )}
            <tr className="border text-sm">
              <td></td>
              <td className="border px-1">
                <span className="font-bold">
                  {searchInput.length > 0
                    ? filteredData.length
                    : data[0].brands.length}
                </span>{" "}
                Count
              </td>
              <td className="border px-1">+Add Calculation</td>
              <td className="border px-1">+Add calculation</td>
              <td className="border px-1">+Add Calculation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-2 shadow  flex justify-center border ">
        <button className="border mx-3 shadow shadow-md text-sm p-1 rounded">
          <span className="border border-white bg-black text-white px-1.5 rounded">
            {selectCount}
          </span>
          Selected
        </button>
        <div className="flex border mx-3 shadow shadow-md text-sm p-1 rounded hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-archive mt-0.5 cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
          </svg>
          <button className="">archive</button>
        </div>

        <div className="flex border mx-3 shadow shadow-md text-sm p-1 rounded text-red-500 hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash3 mt-0.5 cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
          </svg>
          <button className="">Delete</button>
        </div>

        <button className="border mx-3 shadow shadow-md text-sm p-1 rounded hover:bg-gray-200">
          more
        </button>
      </div>
    </div>
  );
}

export default Table;
