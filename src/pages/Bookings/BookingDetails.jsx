import React from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import SingleBookingDataTable from "./SingleBookingDataTable";

const BookingDetails = () => {
  const { data } = useLoaderData() || {};
  console.log(data);
  return (
    <div>
      {" "}
      <Navbar></Navbar>
      <div
        className="hero h-[400px]"
        style={{
          backgroundImage: `url(https://shipexpert.com/wp-content/uploads/2020/05/courier-delivery-signing-package-bg-1200x539.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div>
            <h2 className="font-bold text-3xl">BOOKING DETAILS</h2>
          </div>
        </div>
      </div>
      <SingleBookingDataTable data={data} />
      <Footer></Footer>
    </div>
  );
};

export default BookingDetails;
