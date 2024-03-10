import React, { useState,useEffect } from "react";

function SideNav({isOpen}) {
  const [isClose, setIsClose] = useState(true);

  useEffect(() => {
   
    setIsClose(isOpen);
  }, [isOpen]);

  const handleClose = () => {
   
    setIsClose(!isClose);
  };





  return (
    <div
     className={`md:relative fixed top-0 left-0 ${
        isClose ?   "w-[220px]" : "hidden" 
      } md:block md:m-2 m-1 px-3 bg-gray-100 w-[250px] h-screen rounded border shadow shadow-2xl z-50`}

  >
      <div className="flex justify-around pt-3">


      
      
        <div>
          <img src="https://static.vecteezy.com/system/resources/previews/011/423/495/original/ih-logo-i-h-design-white-ih-letter-ih-letter-logo-design-initial-letter-ih-linked-circle-uppercase-monogram-logo-vector.jpg" alt="Logo" className="rounded w-[35px] mt-2"/>
        </div>

        <div>
          <p className="font-bold"><span className="font-light">INC</span><br /> InnovateHub</p>
        </div>

        <div>
          <img src="https://png.pngitem.com/pimgs/s/79-791921_male-profile-round-circle-users-profile-round-icon.png" className="w-[35px] mt-2.5" alt="Profile" />
        </div>
        <div>
          <button className="md:hidden block text-xl ml-2" onClick={handleClose}>
            <span>&times;</span>
          </button>
        </div>
      </div>
      <div className="mt-6">
        <div className=" flex border  hover:bg-gray-300 cursor-pointer rounded mt-3 px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-vector-pen mt-1"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
            />
            <path
              fill-rule="evenodd"
              d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"
            />
          </svg>
          <h1 className="font-bold px-1">Design Team</h1>
        </div>

        <div className="flex border px-1 hover:bg-gray-300 cursor-pointer rounded mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-megaphone mt-1"
            viewBox="0 0 16 16"
          >
            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z" />
          </svg>
          <h1 className="font-bold px-1">Marketing Team</h1>
        </div>

        <div className="flex hover:bg-gray-300 px-1 cursor-pointer rounded border mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-code mt-1"
            viewBox="0 0 16 16"
          >
            <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
          </svg>
          <h1 className="font-bold   hover:bg-gray-300 cursor-pointer rounded  px-1">
            Development Team
          </h1>
        </div>

        <div className="flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-file-earmark-plus mt-4 mx-1 cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5" />
            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
          </svg>
          <h1 className="font-light border  hover:bg-gray-300 cursor-pointer rounded mt-3 px-1 w-full">
            Create a team
          </h1>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex justify-between hover:bg-gray-300 cursor-pointer rounded mt-3 px-1">
          <h1 className="font-light">Folders</h1>
          <p>+</p>
        </div>

        <select
          name=""
          id=""
          className="w-full border border cursor-pointer bg-gray-100 rounded mt-3 font-bold"
        >
          <option value="" selected>
            Products
          </option>
          <option value="" className="bg-gray-100  border border">
            Roadmap
          </option>
          <option value="" className="bg-gray-100  border border">
            Feedback
          </option>
          <option value="" className="bg-gray-100  border border">
            Performance
          </option>
          <option value="" className="bg-gray-100  border border">
            Team
          </option>
          <option value="" className="bg-gray-100  border border">
            Analytics
          </option>
          <option value="" className="bg-gray-100  border border">
            +Add new sub
          </option>
        </select>

        <select
          name=""
          id=""
          className="w-full border border cursor-pointer bg-gray-100 rounded mt-3 font-bold"
        >
          <option value="" selected>
            Sales
          </option>
          <option value="" className="bg-gray-100  border border">
            Roadmap
          </option>
          <option value="" className="bg-gray-100  border border">
            Feedback
          </option>
          <option value="" className="bg-gray-100  border border">
            Performance
          </option>
          <option value="" className="bg-gray-100  border border">
            Team
          </option>
          <option value="" className="bg-gray-100  border border">
            Analytics
          </option>
          <option value="" className="bg-gray-100  border border">
            +Add new sub
          </option>
        </select>

        <select
          name=""
          id=""
          className="w-full border border cursor-pointer bg-gray-100 rounded mt-3 font-bold"
        >
          <option value="" selected>
            Design
          </option>
          <option value="" className="bg-gray-100  border border">
            Roadmap
          </option>
          <option value="" className="bg-gray-100  border border">
            Feedback
          </option>
          <option value="" className="bg-gray-100  border border">
            Performance
          </option>
          <option value="" className="bg-gray-100  border border">
            Team
          </option>
          <option value="" className="bg-gray-100  border border">
            Analytics
          </option>
          <option value="" className="bg-gray-100  border border">
            +Add new sub
          </option>
        </select>
        <select
          name=""
          id=""
          className="w-full border border cursor-pointer bg-gray-100 rounded mt-3 font-bold"
        >
          <option value="" selected>
            office
          </option>
          <option value="" className="bg-gray-100  border border">
            Roadmap
          </option>
          <option value="" className="bg-gray-100  border border">
            Feedback
          </option>
          <option value="" className="bg-gray-100  border border">
            Performance
          </option>
          <option value="" className="bg-gray-100  border border">
            Team
          </option>
          <option value="" className="bg-gray-100  border border">
            Analytics
          </option>
          <option value="" className="bg-gray-100  border border">
            +Add new sub
          </option>
        </select>
        <select
          name=""
          id=""
          className="w-full border border cursor-pointer bg-gray-100 rounded mt-3 font-bold"
        >
          <option value="" selected>
            Legal
          </option>
          <option value="" className="bg-gray-100  border border">
            Roadmap
          </option>
          <option value="" className="bg-gray-100  border border">
            Feedback
          </option>
          <option value="" className="bg-gray-100  border border">
            Performance
          </option>
          <option value="" className="bg-gray-100  border border">
            Team
          </option>
          <option value="" className="bg-gray-100  border border">
            Analytics
          </option>
          <option value="" className="bg-gray-100  border border">
            +Add new sub
          </option>
        </select>
      </div>

      <div className="flex px-1 mt-10 hover:bg-gray-300 cursor-pointer rounded border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-person-plus mt-1"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          <path
            fill-rule="evenodd"
            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
          />
        </svg>
        <h1 className="font-bold px-1">Invite Teammates</h1>
      </div>

      <div className="flex border px-1 mt-1 hover:bg-gray-300 cursor-pointer rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-question-circle mt-1"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
        </svg>
        <h1 className="font-bold px-1">Help and first steps</h1>
      </div>

      <div className="flex justify-between mt-2 mx-1">
        <h1 className="font-bold px-1 bg-gray-200 font-bold border  hover:bg-gray-300 cursor-pointer rounded px-1 text-sm">
          7 Days left on trial
        </h1>
        <button className="border border-black text-sm hover:bg-gray-800 rounded bg-black text-white">
          Add Billing
        </button>
      </div>
    </div>
  );
}

export default SideNav;
