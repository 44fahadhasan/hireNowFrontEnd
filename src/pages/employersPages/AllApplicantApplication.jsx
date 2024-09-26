import { useQuery } from "@tanstack/react-query";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Content from "../../components/Content";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllApplicantApplication = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: applications, isLoading } = useQuery({
    queryKey: ["applications", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("/applications", {
        headers: {
          email: user?.email,
        },
      });
      return res?.data;
    },
    cacheTime: 0,
  });

  return (
    <div className="mt-16 pb-28">
      <Container>
        <Content
          title={"Review All Applications"}
          content={
            "View and manage all submitted applications. Track candidate review resumes, and application info to streamline your hiring process."
          }
        />

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 whitespace-nowrap">
              <tr>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  No
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  Applicant Name
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  Applicant Email
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  Position Applied
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  Applied Date
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  Actions
                </th>
              </tr>
            </thead>

            {isLoading ? (
              <Loading />
            ) : (
              <tbody className="whitespace-nowrap">
                {applications?.map(
                  (
                    { _id, applicantName, job, applicantEmail, appliedDate },
                    idx
                  ) => (
                    <tr className="hover:bg-gray-50" key={_id}>
                      <td className="p-4 text-[15px] text-gray-800">
                        {idx + 1}
                      </td>

                      <td className="p-4 text-[15px] text-gray-800 flex items-center gap-1">
                        {applicantName}
                      </td>

                      <td className="p-4 text-[15px] text-gray-800">
                        {applicantEmail}
                      </td>

                      <td className="p-4 text-[15px] text-gray-800">
                        {job?.title}
                      </td>

                      <td className="p-4 text-[15px] text-gray-800">
                        {new Date(appliedDate).toLocaleDateString("en-GB")}
                      </td>

                      <td className="p-4">
                        {/* view button */}
                        <Link
                          to={`/Applicant-Info/${_id}`}
                          className="text-primary text-xl"
                        >
                          <FiExternalLink />
                        </Link>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            )}
          </table>
        </div>
      </Container>
    </div>
  );
};

export default AllApplicantApplication;
