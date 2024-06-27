

const SingleBookingDataTable = ({ data }) => {
  return (
    <div>
      <div className="h-[450px] container mx-auto flex justify-center items-center">
        <table className="border border-collapse table">
          <tr>
            <td className="border">CN:</td>
            <td className="border">{data._id}</td>
          </tr>
          <tr>
            <td className="border">Name:</td>
            <td className="border">{data.fullName}</td>
          </tr>
          <tr>
            <td className="border">Service Title:</td>
            <td className="border">{data.title}</td>
          </tr>
          <tr>
            <td className="border">Delivery Date:</td>
            <td className="border">{data.deliveryDate}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SingleBookingDataTable;
