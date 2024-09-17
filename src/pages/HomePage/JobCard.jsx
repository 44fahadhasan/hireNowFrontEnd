import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="m-5">
      <div className="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
        {/* company logo */}
        <Link
          to={`/Company/${job?.profile?._id}`}
          className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
        >
          <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
            <img
              src={job?.profile?.logoUrl}
              alt={job?.profile?.companyName}
              className="h-full w-full object-cover text-gray-700"
            />
          </div>
        </Link>

        <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
          {/* company name */}
          <Link to={`/Company/${job?.profile?._id}`}>
            <h3 className="text-sm text-gray-600">
              {job?.profile?.companyName}
            </h3>
          </Link>

          {/* job title */}
          <h2 className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
            {job?.title?.slice(0, 60)}
          </h2>

          {/* job description */}
          <p className="overflow-hidden pr-7 text-sm">
            {job?.descriptions[0]?.slice(0, 150)}...
          </p>

          <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            {/* job location */}
            <div>
              Location:
              <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                {job?.location}
              </span>
            </div>

            {/* job salary */}
            <div>
              Salary:
              <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                {job?.salary}.00$
              </span>
            </div>

            {/* view button */}
            <Link to={`Job-Details/${job?._id}`}>
              <span className="sm:ml-2 mr-3 rounded-full bg-primary px-2 py-0.5 text-white">
                View
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
