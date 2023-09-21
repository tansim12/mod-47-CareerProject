const CategoryMapDiv = ({ dataDetails }) => {
  const { logo, category_name, availability } = dataDetails;
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <h2 className="font-bold my-2">{category_name}</h2>
      <p className="text-xs">{availability}</p>
    </div>
  );
};

export default CategoryMapDiv;
