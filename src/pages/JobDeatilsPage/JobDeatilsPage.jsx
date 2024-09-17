import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiLink } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";
import Button from "../../components/Button";
import Container from "../../components/Container";
import InputFiled from "../../components/InputFiled";
import TextArea from "../../components/TextArea";
import Tost from "../../components/Tost";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const JobDeatilsPage = () => {
  const [disabled, setDisabled] = useState(false);

  const job = useLoaderData();

  const axiosSecure = useAxiosSecure();

  // handle from submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const input = event.target;

    const resumeLink = input.resumeLink.value;
    const coverLetter = input.coverLetter.value;

    const applicationData = { resumeLink, coverLetter };

    const res = await handleApplicationSubmit(applicationData);

    if (res?.data?.acknowledged && res?.status) {
      setDisabled(true);
      toast.success("Successfully was submit");
      // clear input filed
      input.reset();
    } else {
      toast.success("Have a submission error");
    }
  };

  // handle application data submission
  const handleApplicationSubmit = (applicationData) => {
    const res = axiosSecure
      .post("/applications", applicationData)
      .then((res) => {
        return res;
      });

    return res;
  };

  return (
    <>
      {/* content in top position */}
      <div className="bg-gray-50/90 py-6 w-full mt-10">
        <Container>
          <div className="flex items-center justify-center text-center">
            <div className="space-y-3">
              {/* job title for top position */}
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {job?.title}
              </h1>

              {/* compnay log */}
              <div className="inline-flex items-center gap-2 font-medium">
                <p className="text-gray-500 text-xl">at</p>
                <a href="#companyInfo">
                  <img
                    src={job?.profile?.logoUrl}
                    width="120"
                    height="40"
                    alt={job?.profile?.companyName}
                    className="aspect-[3/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* content in middle position */}
        <div className="grid gap-10 py-8 text-base md:gap-16 md:px-6 lg:grid-cols-4 lg:gap-12 xl:gap-20">
          {/* content right side of the middle position */}
          <div className="space-y-4 lg:col-start-2 lg:col-span-3 xl:space-y-6">
            {/* job title */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                {job?.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">Full-Time</p>
            </div>

            {/* job description & requirements */}
            <div className="space-y-4 text-lg/relaxed lg:space-y-6 xl:text-xl/relaxed">
              {/* description */}
              <div>
                <h3 className="text-xl font-semibold">Description:</h3>

                <div className="space-y-4">
                  {job?.descriptions?.map((description, idx) => (
                    <p key={idx} className="text-justify">
                      {description}
                    </p>
                  ))}
                </div>
              </div>

              {/* requirements */}
              <div>
                <h3 className="text-xl font-semibold">Requirements:</h3>
                <ul className="list-disc list-inside">
                  {job?.requirements?.map((requirement, idx) => (
                    <li key={idx}>{requirement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* content left side of the middle position */}
          <div className="space-y-4 border rounded-lg border-gray-200 lg:col-start-1 lg:row-start-1 lg:space-y-6 dark:border-gray-800">
            <div className="p-4">
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-sm font-normal">{job?.location}</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Salary</h3>
              <p className="text-sm font-normal">{job?.salary}.00$</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Application Deadline</h3>
              <p className="text-sm font-normal">{job?.applicationDeadline}</p>
            </div>
          </div>

          {/* content bottom side of the middle position */}
          <div className="flex flex-col gap-2 lg:col-start-4 lg:gap-4 justify-center">
            <button
              disabled={disabled}
              onClick={() => document.getElementById("modal").showModal()}
            >
              {(disabled && (
                <span className="sm:ml-2 mr-3 rounded-full bg-primary px-2 py-1 text-white">
                  Already Applied
                </span>
              )) || <Button lebel={"Apply"} />}
            </button>
          </div>
        </div>

        {/* content in bottom position */}
        <div className="grid gap-10 py-8 text-base md:gap-16 md:px-6 lg:grid-cols-4 lg:gap-12 xl:gap-20">
          <div className="space-y-4 lg:col-start-1 lg:col-span-3 xl:space-y-6">
            <div className="space-y-2">
              <h2
                id="companyInfo"
                className="text-2xl font-bold tracking-tighter sm:text-3xl"
              >
                Company Info
              </h2>
              <div className="text-sm font-medium md:gap-4">
                <img
                  src={job?.profile?.logoUrl}
                  alt={job?.profile?.companyName}
                  width="120"
                  height="40"
                  className="aspect-[3/1] overflow-hidden rounded-lg object-contain object-center"
                />

                <div className="flex gap-4">
                  <h5>Name:</h5>
                  <address>{job?.profile?.companyName}</address>
                </div>

                <div className="flex gap-4">
                  <h5>Email:</h5>
                  <address>{job?.profile?.email}</address>
                </div>

                <div className="flex gap-4">
                  <h5>Address:</h5>
                  <address>{job?.profile?.address}</address>
                </div>

                <div className="flex gap-1">
                  <h5>Website:</h5>
                  <Link
                    to={job?.profile?.websiteUrl}
                    className="text-gray-500 underline dark:text-gray-400"
                    target="_blank"
                  >
                    Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal start */}
        <dialog id="modal" className="modal modal-bottom sm:modal-middle ">
          <Tost />
          <div className="modal-box border border-gray-300">
            {/* modal component start */}
            <form onSubmit={handleSubmit}>
              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-1">
                <div className="relative block cursor-pointer rounded-lg  p-4 focus:outline-none">
                  {/* remuse link */}
                  <InputFiled
                    label={"Resume Link"}
                    name={"resumeLink"}
                    type={"url"}
                    required={true}
                    placeholder={"Enter Your Resume Link"}
                    icon={<CiLink />}
                  />

                  {/* cover letter input */}
                  <TextArea
                    label={"Cover Letter"}
                    name={"coverLetter"}
                    required={true}
                    placeholder={"Write a professional CV"}
                    rows={5}
                  />
                </div>
              </div>

              <div className="mt-10">
                <button
                  disabled={disabled}
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>

                {/* close button */}
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-primary btn-sm btn-circle  absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                </div>
              </div>
            </form>
            {/* modal component end */}
          </div>
        </dialog>
        {/* modal end */}
      </Container>
    </>
  );
};

export default JobDeatilsPage;
