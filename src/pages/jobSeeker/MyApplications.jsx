import { useQuery } from "@tanstack/react-query";
import { FiExternalLink } from "react-icons/fi";
import { VscPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Content from "../../components/Content";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyApplications = () => {
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
          title={"All Applications Overview"}
          content={
            "Here, you can view all job applications submitted by candidates."
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
                  Company Name
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  Job Title
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  Aplication Status
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  Applied Date
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  Review Aplication
                </th>
              </tr>
            </thead>

            {isLoading ? (
              <Loading />
            ) : (
              <tbody className="whitespace-nowrap">
                {applications?.map(({ _id, job, status, date }, idx) => (
                  <tr className="hover:bg-gray-50" key={_id}>
                    <td className="p-4 text-[15px] text-gray-800">{idx + 1}</td>
                    <td className="p-4 text-[15px] text-gray-800">
                      {job?.profile?.companyName}
                    </td>
                    <td className="p-4 text-[15px] text-gray-800 flex items-center gap-1">
                      {job?.title}
                      <Link
                        to={`/Job-Details/${job?._id}`}
                        className="text-primary"
                      >
                        <FiExternalLink />
                      </Link>
                    </td>
                    <td className="p-4 text-[15px] text-gray-800">
                      <span className="bg-primary px-4 py-1 rounded-full text-white">
                        {status}
                      </span>
                    </td>
                    <td className="p-4 text-[15px] text-gray-800">
                      {new Date(date).toLocaleDateString("en-GB")}
                    </td>
                    <td className="p-4">
                      <Link to={`/Review-Aplication/${_id}`}>
                        <VscPreview className="text-primary" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </Container>
    </div>
  );
};

export default MyApplications;
