import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import Heading from "../components/Heading";
import InputFiled from "../components/InputFiled";

const LoginPage = () => {
  // handle login
  const handleLogin = async (event) => {
    event.preventDefault();
    const input = event.target;

    const email = input.email.value;
    const password = input.password.value;

    console.log({ email, password });
  };

  return (
    <Container>
      <div className="max-w-2xl mx-auto py-16">
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="mb-8">
            <Heading title={"Login Now"} />
          </div>

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

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm text-[#444]"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href=" "
                className="text-primary hover:underline font-semibold"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="!mt-8">
            <button>
              <Button lebel="Login" />
            </button>
          </div>

          <p className="text-sm !mt-8 text-center text-[#444]">
            Don&apos;t have an account{" "}
            <Link
              to="/Register"
              className="text-primary font-semibold hover:underline ml-1 whitespace-nowrap"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
