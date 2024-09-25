import { useQuery } from "@tanstack/react-query";
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

  console.log(applications);

  return <div>All Applicant applications</div>;
};

export default AllApplicantApplication;
