import { NavLink } from "react-router-dom";

const ButtonGlobal = ({buttonName="Get Started"}) => {
    
  return (
    <div>
      {/* link not dynamic  */}
      <NavLink className="btn  btn-md   bg-gradient text-white font-bold">
        {buttonName}
      </NavLink>
    </div>
  );
};

export default ButtonGlobal;
