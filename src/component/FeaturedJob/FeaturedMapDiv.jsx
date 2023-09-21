import { useNavigate } from "react-router-dom";
import ButtonGlobal from "../button/ButtonGlobal";

const FeaturedMapDiv = ({ dataDetails }) => {
  const navigate = useNavigate();
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = dataDetails;
  const handleClickDetails = () => navigate(`featuredJob/${id}`);
  return (
    <div className="border border-gray-300 p-5">
      {/* logo div  */}
      <div>
        <img src={logo} alt="" />
      </div>
      <p className=" font-extrabold text-2xl mt-3">{job_title}</p>
      <p className="text-gray-500 font-semibold">{company_name}</p>
      {/* button div  */}
      <div className="flex gap-5 md:gap-10 my-4 ">
        {/* 1st remote_or_onsite */}
        <div>
          <button className="btn btn-outline btn-sm btn-accent">
            {remote_or_onsite}
          </button>
        </div>
        {/* 2nd  job_type*/}
        <div>
          <button className="btn btn-outline btn-sm btn-accent">
            {job_type}
          </button>
        </div>
      </div>

      {/* location and salary div  */}
      <div className="flex  md:text-base text-xs gap-7">
        <p>📌 {location}</p>
        <p>🤑{salary}</p>
      </div>
      <button onClick={handleClickDetails} className="mt-5">
        <ButtonGlobal buttonName={"View Details"}></ButtonGlobal>
      </button>
    </div>
  );
};

export default FeaturedMapDiv;
