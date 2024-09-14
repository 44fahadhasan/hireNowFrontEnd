import { IoSearchOutline } from "react-icons/io5";
import InputFiled from "./InputFiled";

const SearchBox = ({ handleInputValue }) => {
  return (
    <div className="w-11/12 md:w-8/12 xl:w-6/12 mx-auto">
      <form onChange={handleInputValue} className="w-full px-4">
        {/* text */}
        <InputFiled
          type={"text"}
          placeholder={"Search with job title"}
          icon={<IoSearchOutline />}
        />
      </form>
    </div>
  );
};

export default SearchBox;
