import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Content from "../../components/Content";
import InputFiled from "../../components/InputFiled";
import TextArea from "../../components/TextArea";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUserProfile from "../../hooks/useUserProfile";

const JobPost = () => {
  const [descriptions, setDescriptions] = useState([]);
  const [requirements, setRequirements] = useState([]);

  const { userProfile } = useUserProfile();

  const axiosSecure = useAxiosSecure();

  const handleDescription = (event) => {
    event.preventDefault();
    const input = event.target;

    const description = input.description.value;

    setDescriptions([...descriptions, description]);

    // clear input filed
    input.reset();
  };

  const handleRequirements = (event) => {
    event.preventDefault();
    const input = event.target;

    const requirement = input.requirement.value;

    setRequirements([...requirements, requirement]);

    // clear input filed
    input.reset();
  };

  const handleFromSubmit = async (event) => {
    event.preventDefault();

    if (descriptions.length === 0) {
      return toast.success("Job description can't empty");
    } else if (requirements.length === 0) {
      return toast.success("Job requirement can't empty");
    }

    const input = event.target;

    const title = input.title.value;
    const salary = input.salary.value;
    const applicationDeadline = input.applicationDeadline.value;
    const location = input.location.value;

    const jobData = {
      title,
      salary,
      applicationDeadline,
      location,
      descriptions,
      requirements,
      profile: userProfile,
    };

    const res = await handleJobPost(jobData);

    if (res?.data?.acknowledged && res?.status) {
      toast.success("Job post done");
      // clear input filed
      input.reset();
      setDescriptions([]);
      setRequirements([]);
    } else {
      toast.success("Have a job post error");
    }
  };

  // new job data save to database
  const handleJobPost = (jobData) => {
    const res = axiosSecure.post("/jobs", jobData).then((res) => {
      return res;
    });

    return res;
  };

  return (
    <div className="mt-20">
      <Container>
        <Content
          title={"Publish a Job"}
          content={
            "Looking to hire the best talent? Publish  your job openings with us and reach thousands of qualified candidates."
          }
        />

        <div className="w-full mt-[70px] shadow-sm mx-auto md:w-[90%] lg:w-[80%] xl:w-[65%] border rounded-md py-10 px-5 md:px-10">
          {/* job description */}
          <form onSubmit={handleDescription}>
            <h4 className="text-sm px-1 text-base-content font-medium -mb-1">
              Description:
            </h4>

            {descriptions?.map((description) => (
              <p className="text-justify my-3 text-base-content">
                {description}
              </p>
            ))}

            <TextArea
              name={"description"}
              required={true}
              placeholder={"Write job description"}
              rows={5}
            />

            <div className="flex justify-end">
              <button type="submit" className="btn btn-sm btn-primary my-1">
                Add
              </button>
            </div>
          </form>

          {/* job requirements */}
          <form onSubmit={handleRequirements}>
            <h4 className="text-sm px-1 text-base-content font-medium -mb-1">
              Requirements:
            </h4>

            {requirements && (
              <ul className="list-disc my-3 text-justify space-y-1">
                {requirements?.map((requirement) => (
                  <li>{requirement}</li>
                ))}
              </ul>
            )}

            <TextArea
              name={"requirement"}
              required={true}
              placeholder={"Write job requirement"}
              rows={2}
            />

            <div className="flex justify-end">
              <button type="submit" className="btn btn-sm btn-primary my-1">
                Add
              </button>
            </div>
          </form>

          <form onSubmit={handleFromSubmit} className="space-y-4">
            {/* job title */}
            <InputFiled
              label={"Title:"}
              name={"title"}
              type={"text"}
              required={true}
              placeholder={"Write job title"}
            />

            {/* salary & last apply date */}
            <div className="md:flex gap-5 space-y-4 md:space-y-0">
              <div className="text-base w-full">
                <InputFiled
                  label={"Salary:"}
                  name={"salary"}
                  type={"number"}
                  required={true}
                  placeholder={"Write job salary"}
                />
              </div>

              <div className="space-y-1 text-base w-full">
                <InputFiled
                  label={"Application Deadline:"}
                  name={"applicationDeadline"}
                  type={"date"}
                  required={true}
                />
              </div>
            </div>

            {/* job location */}
            <div className="">
              <label className="text-sm px-1 text-base-content font-medium">
                Location:
              </label>
              <select
                required
                name="location"
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
              >
                <option selected disabled></option>
                <option value="Remote">Remote</option>
                <option value="On-Site">On-Site</option>
              </select>
            </div>

            <div className="flex justify-center pt-5">
              <button type="submit">
                <Button lebel={"Post Now"} />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default JobPost;
