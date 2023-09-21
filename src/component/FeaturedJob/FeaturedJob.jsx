import { useEffect, useState } from "react";
import CommonTitle from "../CommonTitle/CommonTitle";
import FeaturedMapDiv from "./FeaturedMapDiv";
import ButtonGlobal from "../button/ButtonGlobal";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const res = await fetch("./jobs.json");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobData();
  }, []);
  const jobData = jobs || [];

  return (
    <section className="my-24">
      <CommonTitle
        title={"Featured Jobs"}
        titleDetails={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      ></CommonTitle>
      {/* map div  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {jobData.slice(0, dataLength).map((dataDetails, index) => (
          <FeaturedMapDiv
            key={index}
            dataDetails={dataDetails}
          ></FeaturedMapDiv>
        ))}
      </div>
      {/* sea more button  */}
      <div className="text-center my-16">
        <button
          onClick={() => setDataLength(jobData.length)}
          className={`${dataLength !== 6 ? "visible" : "hidden"}`}
        >
          <ButtonGlobal buttonName="See All Jobs"></ButtonGlobal>
        </button>
      </div>
    </section>
  );
};

export default FeaturedJob;
