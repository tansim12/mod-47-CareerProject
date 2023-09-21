import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const homeBack = () => navigate("/");
  return (
    <div className="mt-[40vh]">
      <h1 className="text-5xl text-center ">opppsss</h1>
      <div className="text-center my-10 text-white">
        <button
          className="btn btn-error text-black font-bold"
          onClick={homeBack}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Error;
