import { useLoaderData } from "react-router-dom";

const UpdateJobPost = () => {
  const job = useLoaderData();

  console.log({ job });

  return <div>UpdateJobPost</div>;
};

export default UpdateJobPost;
