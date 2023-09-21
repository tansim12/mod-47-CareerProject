import ButtonGlobal from "../button/ButtonGlobal";

const Banner = () => {
  return (
    <section className=" my-10 lg:flex bg-gradientBanner  ">
      {/* text div  */}
      <div className="flex flex-col justify-center">
        <div className=" text text-3xl md:text-5xl lg:text-7xl font-bold">
          <h1>One Step</h1>
          <h1>Closer To Your</h1>
          <h1 className="text-neutral">Dream Job</h1>
        </div>
        <p className="my-5 md:text-base text-xs">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <div>
          <ButtonGlobal></ButtonGlobal>
        </div>
      </div>
      {/* img div  */}
      <div>
        <img src="https://i.ibb.co/TB8DJHM/user.png" alt="" />
      </div>
    </section>
  );
};

export default Banner;
