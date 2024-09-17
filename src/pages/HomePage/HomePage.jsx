import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Content from "../../components/Content";
import SearchBox from "../../components/SearchBox";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import JobsAndFilter from "./JobsAndFilter";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("Default");
  // todo: range value will be fetch from database
  const [range, setRange] = useState([0, 1000]);
  const [companys, setCompanys] = useState([]);
  const [loading, setLoading] = useState(true);

  // state for pagination
  const [totalJobsNumber, setTotalJobsNumber] = useState(0);
  const [activePageNumber, setActivePageNumber] = useState(0);
  const parPageJob = 6;

  const [jobs, setJobs] = useState([]);
  const [companyNames, setCompanyNames] = useState([]);

  // handle input value
  const handleInputValue = (e) => {
    setSearchText(e.target.value);
  };

  const axiosPublic = useAxiosPublic();

  const modifyCompanys = JSON.stringify(companys);

  // fetch all job from database
  useEffect(() => {
    axiosPublic
      .get(
        `/jobs?search=${searchText}&page=${activePageNumber}&size=${parPageJob}&sort=${sort}&salaryRange=${`${range[0]}-${range[1]}`}&company=${modifyCompanys}`
      )
      .then(({ data }) => {
        setJobs(data?.jobs);
        setTotalJobsNumber(data?.totalJobsNumber);
        setCompanyNames(data?.companyNames);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [searchText, activePageNumber, parPageJob, sort, range, modifyCompanys]);

  return (
    <Container>
      <div className="mt-20">
        <Content
          title={"what are you looking for job's?"}
          content={
            "Explore career opportunities that align with your aspirations."
          }
        />
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
        jobs={jobs}
        totalJobsNumber={totalJobsNumber}
        parPageJob={parPageJob}
        activePageNumber={activePageNumber}
        setActivePageNumber={setActivePageNumber}
        companyNames={companyNames}
      />
    </Container>
  );
};

export default HomePage;
