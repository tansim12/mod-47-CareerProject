const CommonTitle = ({ title, titleDetails }) => {
  return (
    <div className="text-center my-10">
      <h1 className="font-extrabold text-3xl md:text-5xl">{title}</h1>
      <p className="my-3">{titleDetails}</p>
    </div>
  );
};

export default CommonTitle;
