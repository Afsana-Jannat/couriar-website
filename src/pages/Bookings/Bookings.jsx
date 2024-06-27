import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link, useLoaderData } from "react-router-dom";

const Bookings = () => {
  const { data } = useLoaderData() || [];
  return (
    <div>
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
            <h2 className="font-bold text-3xl">All Bookings</h2>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="font-bold">
                <th>SL</th>
                <th>CN</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Delivery Date</th>
                <th>Service Title</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item.fullName}</td>
                  <td>{item.phone}</td>
                  <td>{item.deliveryDate}</td>
                  <td>{item.title}</td>
                  <td>
                    <Link
                      className="text-blue-500 underline"
                      to={"/bookings/" + item._id}
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Bookings;
