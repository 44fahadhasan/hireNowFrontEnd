import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: userProfile, isLoading } = useQuery({
    queryKey: ["userProfile", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.post("/auth/me", { email: user?.email });
      return res?.data;
    },
    cacheTime: 0,
  });

  return { userProfile, isLoading };
};

export default useUserProfile;
