import { useContext } from "react";
import { DetailsContext } from "./JobDetails";
import ButtonGlobal from "../button/ButtonGlobal";
import BackButton from "../BackButton/BackButton";

const JobDetailsDiv = () => {
  const dataDetails = useContext(DetailsContext);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = dataDetails;
  return (
    <>
      <section className=" md:flex lg:flex gap-10 my-20">
        {/* right div  */}
        <div className="space-y-10 basis-[60%]">
          <p>
            <span className="font-extrabold">Job Description : </span>
            <span className="text-gray-500">{job_description}</span>
          </p>
          <p>
            <span className="font-extrabold">Job Responsibility :</span>
            <span className="text-gray-500">{job_responsibility} </span>
          </p>
          <p>
            <span className="font-extrabold">Educational Requirements : </span>{" "}
            <br />
            <span className="text-gray-500"> {educational_requirements} </span>
          </p>
          <p>
            <span className="font-extrabold">Experiences : </span>
            <br />
            <span className="text-gray-500">{experiences}</span>
          </p>
        </div>
        {/* left div  */}
        <div className="p-6 rounded-lg basis-[40%] bg-[#f2f4ff] md:mt-0 mt-10">
          <h1 className="text-2xl font-extrabold t my-2">Job Details</h1>
          <hr />
          <div className="space-y-2 mt-3">
            <p>
              <span className="font-extrabold">Salary : </span> {salary} (Per
              Month){" "}
            </p>
            <p>
              <span className="font-extrabold">Job Title : </span> {job_title}{" "}
            </p>
          </div>
          {/* contact  */}
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold my-6 ">
              Contact Information
            </h1>
            <hr />
            <div className="space-y-3 mt-4">
              <p>
                <span className="font-extrabold">Phone : </span>{" "}
                {contact_information?.phone}{" "}
              </p>
              <p>
                <span className="font-extrabold">Email : </span>{" "}
                {contact_information?.email}{" "}
              </p>
              <p>
                <span className="font-extrabold">Address : </span>{" "}
                {contact_information?.address}{" "}
              </p>
            </div>
            {/* button div  */}
            <div className="mt-10">
              <button className="w-full">
                <ButtonGlobal buttonName="Apply Now"></ButtonGlobal>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* backButton  */}
      <div className="text-center">
      <BackButton></BackButton>
      </div>
    </>
  );
};

export default JobDetailsDiv;
