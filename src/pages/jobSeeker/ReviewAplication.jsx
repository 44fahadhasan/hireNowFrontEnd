import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ReviewAplication = () => {
  const { id } = useParams();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: reviewApplication, isLoading } = useQuery({
    queryKey: ["reviewApplication", user?.email],
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

  console.log({ reviewApplication, isLoading });
  return <div>Review Aplication</div>;
};

export default ReviewAplication;
