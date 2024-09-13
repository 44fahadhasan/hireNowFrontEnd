import { Link } from "react-router-dom";
import logo from "../assets/images/hireNowLogopng.png";

const SiteLogo = () => {
  return (
    <div className="w-[160px]">
      <Link to="/">
        <img src={logo} alt="HireNow Logo" className="object-cover w-full" />
      </Link>
    </div>
  );
};

export default SiteLogo;
