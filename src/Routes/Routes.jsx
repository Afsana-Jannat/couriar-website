import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Servicespage/Services/Services";
import ServicesDetails from "../pages/Servicespage/ServicesDetails/ServicesDetails";
import Bolgs from "../pages/Blogs/Bolgs";
import Contact from "../pages/Contact/Contact";
import Tracking from "../pages/Tracking/Tracking";
import axios from "axios";
import { SERVER_API } from "../utils/config";
import Bookings from "../pages/Bookings/Bookings";
import BookingDetails from "../pages/Bookings/BookingDetails";
import Dashboard from "../Layout/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/servicesdetails/:id",
        element: <ServicesDetails></ServicesDetails>,
        loader: async ({ params }) =>
          axios.get(SERVER_API + "/services/" + params.id),
      },
      {
        path: "/bookings",
        element: <Bookings />,
        loader: async () => axios.get(SERVER_API + "/bookings/"),
      },
      {
        path: "/bookings/:id",
        element: <BookingDetails />,
        loader: async ({ params }) =>
          axios.get(SERVER_API + "/bookings/" + params.id),
      },
      {
        path: "/blogs",
        element: <Bolgs></Bolgs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/tracking",
        element: <Tracking></Tracking>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      // {
      //   path: "/dashboard/bookings",
      //   element: <Bookings />,
      //   loader: async () => axios.get(SERVER_API + "/bookings/"),
      // },
      // {
      //   path: "/dashboard/bookings/:id",
      //   element: <BookingDetails />,
      //   loader: async ({ params }) =>
      //     axios.get(SERVER_API + "/bookings/" + params.id),
      // },
    ]
  }
]);
