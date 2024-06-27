import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaStackOverflow } from "react-icons/fa";
import { SiSpeedypage } from "react-icons/si";
import { TbCirclesRelation } from "react-icons/tb";
import { useSearchParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { SERVER_API } from "../../utils/config";
import SingleBookingDataTable from "../Bookings/SingleBookingDataTable";

const Tracking = () => {
  const [data, setData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery) {
      return;
    }

    axios
      .get(SERVER_API + "/bookings/" + searchQuery)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setData(err.response.data);
      });
  };
  return (
    <div>
      <Navbar></Navbar>

      {/* search banner part  */}
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage:
            "url(https://thinktransportation.net/wp-content/uploads/2023/06/Nevtelen-terv-8-1.webp)",
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-white">
          <div>
            <h2 className="font-bold text-3xl mb-4">TRACK YOUR CN</h2>
            <p>
              Track your CN details in one place with real-time updates. Track
              your product by CN Number, Sender Phone, Receiver Phone or Ref No.
            </p>
            <div className="border grid grid-cols-4 gap-2 mt-6 p-3 bg-white text-black">
              <div className="border-gray-300 border p-2 font-semibold">
                <select>
                  <option value="CN Number">CN Number</option>
                  <option value="Receiver Ciontact">Receiver Contact</option>
                  <option value="Receiver Ciontact">Sender Contact</option>
                  <option value="Receiver Ciontact">Reference Contact.</option>
                </select>
              </div>
              <div className="border-gray-300 border p-2 font-semibold">
                <select>
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option value="Last 7 days">Last 7 days</option>
                  <option value="Last 14 days"> Last 14 days</option>
                  <option value="Last 21 days">Last 21 days</option>
                  <option value="Last 30 days">Last 30 days</option>
                </select>
              </div>
              <div>
                <form className="flex gap-2" onSubmit={handleSearch}>
                  <input
                    type="text"
                    className="border-gray-300 border p-2 font-semibold"
                    placeholder="Search your CN Number"
                    defaultValue={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                  />

                  <button
                    className="btn w-full rounded-none bg-[#FA4318] border-none
                    text-white"
                    type="submiy"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  search results  */}
      {data.success ? (
        <SingleBookingDataTable data={data} />
      ) : (
        <div className="h-20 flex justify-center items-center">
          <h3 className="text-red-500 font-4xl">{data.message}</h3>
        </div>
      )}
      <div className="text-center mt-10">
        <h2 className="font-bold text-3xl">So Why Choose us?</h2>
        <p className="text-sm text-gray-600 mt-3">
          There are basic principles that we consistently uphold.
        </p>
      </div>
      <div className="text-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-4 mt-10 gap-4 p-4 max-w-4xl mx-auto">
        <div className="border rounded-lg border-none bg-[#edf8ff] p-4">
          <SiSpeedypage className="text-4xl mb-4" />
          <h2 className="text-sm font-semibold">1. Speed</h2>
          <p className="mt-2 text-xs">
            Why use a Courier Service if the item won’t arrive quickly? Our
            streamlined network ensures the fastest possible movement of
            documents and packages.
          </p>
        </div>
        <div className="border rounded-lg border-none bg-[#edf8ff] p-4">
          <TbCirclesRelation className="text-4xl mb-4" />
          <h2 className="text-sm font-semibold">2. Reliability</h2>
          <p className="mt-2 text-xs">
            The SCS system of security checks and emergency back-ups is
            absolutely complete. Thanks to computerized administration and a
            staff that is second to none.
          </p>
        </div>
        <div className="border rounded-lg border-none bg-[#edf8ff] p-4">
          <FaStackOverflow className="text-4xl mb-4" />
          <h2 className="text-sm font-semibold">3. Low Cost</h2>
          <p className="mt-2 text-xs">
            All rates are quite reasonable, even for heavy/lightweight items,
            fragile items, articles or bulky printed materials.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Tracking;
