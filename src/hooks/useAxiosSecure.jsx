import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { userLogOut } = useAuth();

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("Have a error please login again");
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  // add a request interceptor
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");

      // when request get token from local stroge. then this token set in header request
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      }
    },

    function (error) {
      return Promise.reject(error);
    }
  );

  // add a response interceptor
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },

    function (error) {
      const errorStatus = error?.response?.status;
      if (errorStatus === 401 || errorStatus === 403) {
        // handle user logout
        handleLogOut();

        navigate("/Login");
      }
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
