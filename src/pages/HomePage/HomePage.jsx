import { useState } from "react";
import Container from "../../components/Container";
import Content from "../../components/Content";
import SearchBox from "../../components/SearchBox";
import JobsAndFilter from "./JobsAndFilter";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("Default");
  // todo: range value will be fetch from database
  const [range, setRange] = useState([0, 100]);
  const [companys, setCompanys] = useState([]);
  const [loading, setLoading] = useState(!true);

  // handle input value
  const handleInputValue = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Container>
      <div className="mt-20">
        <Content />
        <SearchBox handleInputValue={handleInputValue} />
      </div>

      <JobsAndFilter
        sort={sort}
        setSort={setSort}
        loading={loading}
        range={range}
        setRange={setRange}
        companys={companys}
        setCompanys={setCompanys}
      />
    </Container>
  );
};

export default HomePage;
