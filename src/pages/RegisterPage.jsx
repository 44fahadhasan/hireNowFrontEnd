import { useState } from "react";
import { CiLink } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import Heading from "../components/Heading";
import InputFiled from "../components/InputFiled";

const RegisterPage = () => {
  const [accountType, setAccountType] = useState("jobSeeker");

  // const handle singup
  const handleSingup = async (event) => {
    event.preventDefault();
    const input = event.target;

    if (accountType === "jobSeeker") {
      const fullName = input.fullName.value;
      const email = input.email.value;
      const password = input.password.value;
      const role = "jobSeeker";

      console.log({
        fullName,
        email,
        password,
        role,
      });
    }

    if (accountType === "employer") {
      const companyName = input.companyName.value;
      const email = input.email.value;
      const password = input.password.value;
      const websiteUrl = input.websiteUrl.value;
      const address = input.address.value;
      const logoUrl = input.logoUrl.value;
      const role = "employer";

      console.log({
        companyName,
        email,
        password,
        websiteUrl,
        address,
        logoUrl,
        role,
      });
    }
  };

  return (
    <Container>
      <div className="max-w-2xl mx-auto py-16">
        <div className="mb-8">
          <Heading title={"Register Now"} />
        </div>

        {/* account type */}
        <div className="space-y-1 text-base w-full mb-4">
          <label className="text-sm px-1 text-base-content">Account Type</label>
          <select
            onChange={(e) => setAccountType(e.target.value)}
            name="accountType"
            className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-secondary bg-base-100"
          >
            <option value="jobSeeker">Job seeker</option>
            <option value="employer">Employer</option>
          </select>
        </div>

        {/* from for jobSeeker */}
        <div
          className={`${(accountType === "jobSeeker" && "block") || "hidden"}`}
        >
          <form onSubmit={handleSingup} className="space-y-4">
            {/* full name */}
            <InputFiled
              label={"Full Name"}
              name={"fullName"}
              type={"text"}
              required={true}
              placeholder={"Your Full Name"}
              icon={<MdOutlineDriveFileRenameOutline />}
            />

            {/* email */}
            <InputFiled
              label={"Eamil"}
              name={"email"}
              type={"eamil"}
              required={true}
              placeholder={"Your Eamil"}
              icon={<MdEmail />}
            />

            {/* password */}
            <InputFiled
              label={"Password"}
              name={"password"}
              type={"password"}
              required={true}
              placeholder={"Your Password"}
              openIcon={<FaEye />}
              closeIcon={<FaEyeSlash />}
            />

            <div className="!mt-8">
              <button>
                <Button lebel={"Register"} />
              </button>
            </div>
          </form>
        </div>

        {/* form for employer */}
        <div
          className={`${
            (accountType === "employer" && "block") || "hidden"
          } space-y-4`}
        >
          <form onSubmit={handleSingup} className="space-y-4">
            {/* company name */}
            <InputFiled
              label={"Company Name"}
              name={"companyName"}
              type={"text"}
              required={true}
              placeholder={"Your Company Name"}
              icon={<MdOutlineDriveFileRenameOutline />}
            />

            {/* email */}
            <InputFiled
              label={"Eamil"}
              name={"email"}
              type={"eamil"}
              required={true}
              placeholder={"Your Eamil"}
              icon={<MdEmail />}
            />

            {/* password */}
            <InputFiled
              label={"Password"}
              name={"password"}
              type={"password"}
              required={true}
              placeholder={"Your Password"}
              openIcon={<FaEye />}
              closeIcon={<FaEyeSlash />}
            />

            {/* company website url */}
            <InputFiled
              label={"Company Website Url"}
              name={"websiteUrl"}
              type={"url"}
              required={true}
              placeholder={"Your Company Website Url"}
              icon={<CiLink />}
            />

            {/* company address */}
            <InputFiled
              label={"Company Address"}
              name={"address"}
              type={"text"}
              required={true}
              placeholder={"Your Company Address"}
              icon={<IoLocationOutline />}
            />

            {/* company logo url */}
            <InputFiled
              label={"Company Logo Url"}
              name={"logoUrl"}
              type={"url"}
              required={true}
              placeholder={"Your Company Logo Url"}
              icon={<CiLink />}
            />

            <div className="!mt-8">
              <button>
                <Button lebel={"Register"} />
              </button>
            </div>
          </form>
        </div>

        {/* from bottom */}
        <p className="!mt-8 text-center text-[#444]">
          You have an account{" "}
          <Link
            to="/Login"
            className="text-primary font-semibold hover:underline ml-1 whitespace-nowrap"
          >
            Login here
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default RegisterPage;
