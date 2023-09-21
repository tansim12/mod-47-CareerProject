import { useLoaderData, useParams } from "react-router-dom";
import JobDetailsDiv from "./JobDetailsDiv";
import { createContext } from "react";
export const DetailsContext = createContext(null);

const JobDetails = () => {
  const data = useLoaderData();
  const { paramsId } = useParams();
  const intId = parseInt(paramsId);
  const findData = data.find((dataDetails) => dataDetails.id === intId);

  return (
    <section>
      <DetailsContext.Provider value={findData}>
        <div>
          <JobDetailsDiv></JobDetailsDiv>
        </div>
      </DetailsContext.Provider>
    </section>
  );
};

export default JobDetails;
