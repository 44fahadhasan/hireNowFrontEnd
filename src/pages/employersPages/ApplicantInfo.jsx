import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ApplicantInfo = () => {
  const { id } = useParams();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: application, isLoading } = useQuery({
    queryKey: ["application", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/applications/${id}`, {
        headers: {
          email: user?.email,
        },
      });
      return res?.data;
    },
    cacheTime: 0,
  });

  console.log({ application, isLoading });

  return <div>ApplicantInfo</div>;
};

export default ApplicantInfo;
