import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FiExternalLink } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Container from "../../components/Container";
import Content from "../../components/Content";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PostedJobs = () => {
  const navigate = useNavigate();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: postedJobs,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["postedJobs", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("/posted-jobs", {
        headers: {
          email: user?.email,
        },
      });
      return res?.data;
    },
    cacheTime: 0,
  });

  // handle job post delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This post will be delete",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#0094D5",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/jobs/${id}`)
          .then(({ data }) => {
            if (data.acknowledged && data.deletedCount === 1) {
              Swal.fire({
                title: "Delete!",
                text: "Job post has been delete",
                icon: "success",
              });

              // refetch update data
              refetch();
            }
          })
          .catch((error) => {
            toast.error(error?.message);
          });
      }
    });
  };

  return (
    <div className="mt-16 pb-28">
      <Container>
        <Content
          title={"Posted Jobs Overview"}
          content={
            "Easily track and manage all the jobs you've posted. View applicant details, update job and more information."
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
                  Job Title
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  Job Type
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  Applied
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  Job Status
                </th>
                <th className="p-4 text-left text-xs font-semibold uppercase text-gray-800">
                  Posted Date
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
                {postedJobs?.map(
                  (
                    { _id, title, location, applied, jobStatus, postedAt },
                    idx
                  ) => (
                    <tr className="hover:bg-gray-50" key={_id}>
                      <td className="p-4 text-[15px] text-gray-800">
                        {idx + 1}
                      </td>

                      <td className="p-4 text-[15px] text-gray-800 flex items-center gap-1">
                        {title}
                        <Link
                          to={`/Job-Details/${_id}`}
                          className="text-primary"
                        >
                          <FiExternalLink />
                        </Link>
                      </td>

                      <td className="p-4 text-[15px] text-gray-800">
                        {location}
                      </td>

                      <td className="p-4 text-[15px] text-gray-800">
                        <span className="bg-primary px-4 py-1 rounded-full text-white">
                          {applied}
                        </span>
                      </td>
                      <td className="p-4 text-[15px] text-gray-800">
                        <span className="bg-primary px-4 py-1 rounded-full text-white">
                          {jobStatus}
                        </span>
                      </td>
                      <td className="p-4 text-[15px] text-gray-800">
                        {new Date(postedAt).toLocaleDateString("en-GB")}
                      </td>
                      <td className="p-4 text-2xl flex gap-2">
                        {/* delete button */}
                        <button onClick={() => handleDelete(_id)}>
                          <MdDelete className="text-red-500" />
                        </button>

                        {/* update button */}
                        <button
                          onClick={() => navigate(`/Update-Job-Post/${_id}`)}
                        >
                          <TbEdit className="text-[#0094D5]" />
                        </button>
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

export default PostedJobs;
