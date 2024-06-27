import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import { SERVER_API } from "../../../utils/config";

const ServicesDetails = () => {
  const { data } = useLoaderData() || {};
  const { _id, success, ...rest } = data;
  const { register, handleSubmit } = useForm();

  const onSubmit = async (inputData) => {
    if (!inputData.fullName) {
      return;
    }
    const doc = {
      ...inputData,
      serviceId: _id,
      ...rest,
    };

    const { data } = await axios.post(SERVER_API + "/bookings", doc);
    console.log(data);
    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "Service booked successfully ",
        text: "CN: " + data.data.insertedId,
        footer: '<a href="#">See Details</a>',
      });
    }
  };
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
            <h2 className="font-bold text-3xl">SERVICES DETAILS</h2>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 mt-12 max-w-4xl mx-auto">
        <div className="col-span-2">
          <div>
            <img src={data.src} alt="" />
            <h2 className="mt-8 font-bold text-2xl">{data?.title}</h2>
            <p className="text-xs text-gray-600 mt-6">{data?.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div>
              <img
                src="https://www.wowtheme7.com/tf/transpro/assets/img/service/8.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mt-2 mb-2">
                Global Transaction Advisory
              </h2>
              <hr />
              <p className="mt-4 text-sm text-gray-600">
                Customer engagement matters <br />
                The Love Boat promis someg for Plan <br />
                Research beyond the business plan <br />
                Logistics ground in Asia Pacific <br />
                Logistics ground in South America <br />
                Transportation across Europe
              </p>
            </div>
          </div>
          <h2 className="mt-8 text-3xl font-bold mb-4">How It Works</h2>
          <hr />
          <p className="text-sm text-gray-600 mt-6 mb-6">
            Holisticly conceptualize go forward customer service rather than
            transparent infomediaries. Continually envisioneer 2.0
            potentialities without team building processes. Dramatically pursue
            client-centric human capital before client-centered sources.
          </p>
        </div>

        <div>
          <h2 className="text-center font-bold text-2xl mb-4">Booking Now</h2>
          <div>
            <div className="text-xl ml-4 p-6 text-black border font-semibold">
              <h2 className="font-semibold text-gray-600 text-2xl mb-1">
                Pick your date & time for delivery
              </h2>
              <p className="text-sm mb-2 text-gray-400">
                FASTEST COURIER SERVICES IN BANGLADESH
              </p>
              <hr className="mb-2" />
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered rounded-none input-sm"
                    required
                    {...register("fullName", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Phone</span>
                  </label>
                  <input
                    type="phone"
                    placeholder="Phone"
                    className="input input-bordered rounded-none input-sm"
                    required
                    {...register("phone", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Delivery Date</span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered rounded-none input-sm"
                    required
                    {...register("deliveryDate", { required: true })}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn rounded-none btn-sm text-white bg-orange-600 ">
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ServicesDetails;
