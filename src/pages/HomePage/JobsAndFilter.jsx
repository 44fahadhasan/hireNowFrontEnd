import { Select } from "@headlessui/react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import Filter from "./Filter";
import FilterForMobile from "./FilterForMobile";
import JobCard from "./JobCard";

const sortOptions = [
  { label: "Default" },
  { label: "Remote" },
  { label: "On-Site" },
];

const jobs = [1, 2, 3, 4];

const JobsAndFilter = ({
  setSort,
  sort,
  loading,
  range,
  setRange,
  companys,
  setCompanys,
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  //
  return (
    <>
      {/* filter mobile  dialog */}
      <FilterForMobile
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
        range={range}
        setRange={setRange}
        companys={companys}
        setCompanys={setCompanys}
      />

      <main>
        {/* title and sorting top area */}
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          {/* title left area */}
          <h1 className="text-3xl font-bold tracking-tight text-secondary hidden sm:block">
            Jobs(103)
          </h1>

          {/* sort right area */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
            {/* select for job location */}
            <div className="inline-flex gap-1 justify-center text-sm lg:text-base">
              <label className="font-medium text-black cursor-pointer">
                Sort By:
                <Select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-[85px]"
                  name="status"
                  aria-label="job sort"
                >
                  {sortOptions?.map(({ label }) => (
                    <option key={label} value={label}>
                      {label}
                    </option>
                  ))}
                </Select>
              </label>
            </div>

            {/* filter icon for mobile device */}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="text-gray-400 hover:text-gray-500  lg:hidden flex gap-2 items-center"
            >
              <span className="text-sm font-medium text-gray-700 hover:text-black">
                Filters
              </span>
              <FunnelIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* filter left side and jobs gird right side */}
        <section aria-labelledby="jobs-heading" className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters start here */}
            <Filter
              hide={true}
              range={range}
              setRange={setRange}
              companys={companys}
              setCompanys={setCompanys}
            />

            {/* jobs grid start here */}
            <div className="lg:col-span-3">
              {loading ? (
                <Loading />
              ) : (
                <div>
                  {jobs?.length === 0 ? (
                    <NotFound />
                  ) : (
                    jobs?.map((job) => <JobCard job={job} key={job._id} />)
                  )}
                </div>
              )}

              {/* load more button */}
              <div className="flex justify-center mt-9">
                <button
                  type="button"
                  className="ml-2 mr-3 rounded-full bg-primary px-3 py-1 text-white"
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default JobsAndFilter;
