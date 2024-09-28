import { FaFileAlt, FaUsers } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import Container from "../../components/Container";
import Content from "../../components/Content";

const DashboardHome = () => {
  return (
    <section className="py-8">
      <Container>
        <Content title={"Dashboard"} />

        <div className="mt-4">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="p-3 bg-primary bg-opacity-75 rounded-full">
                  <FaUsers className="text-3xl text-white" />
                </div>

                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    8,282
                  </h4>
                  <div className="text-gray-500">All Users</div>
                </div>
              </div>
            </div>

            <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="p-3 bg-orange-600 bg-opacity-75 rounded-full">
                  <MdOutlinePostAdd className="text-3xl text-white" />
                </div>

                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    200,521
                  </h4>
                  <div className="text-gray-500">Total Jobs</div>
                </div>
              </div>
            </div>

            <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
              <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                <div className="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                  <FaFileAlt className="text-3xl text-white" />
                </div>

                <div className="mx-5">
                  <h4 className="text-2xl font-semibold text-gray-700">
                    215,542
                  </h4>
                  <div className="text-gray-500">Applications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardHome;
