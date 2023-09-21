import { useEffect, useState } from "react";
import CategoryMapDiv from "./CategoryMapDiv";
import CommonTitle from "../CommonTitle/CommonTitle";

const CategoryJob = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const res = await fetch("./categoryData.json");
        const data = await res.json();
        setCategory(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategoryData();
  }, []);
  return (
    <section className="my-10 md:my-20">
      <CommonTitle
        title={"Job Category List"}
        titleDetails={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      ></CommonTitle>

      {/* map category data  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {category.map((dataDetails, index) => (
          <CategoryMapDiv
            key={index}
            dataDetails={dataDetails}
          ></CategoryMapDiv>
        ))}
      </div>
    </section>
  );
};

export default CategoryJob;
