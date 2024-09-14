import React from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";

const JobDeatilsPage = () => {
  return (
    <>
      {/* content in top position */}
      <div className="bg-gray-50/90 py-6 w-full mt-10">
        <Container>
          <div className="flex items-center justify-center text-center">
            <div className="space-y-3">
              {/* job title for top position */}
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Senior Product Designer
              </h1>

              {/* compnay log */}
              <div className="inline-flex items-center gap-2 font-medium">
                <p className="text-gray-500 text-xl">at</p>
                <img
                  src="https://marketplace.canva.com/EAFK6GIdp20/1/0/1600w/canva-blue-%26-black-simple-company-logo-nwGjVuSJ-D0.jpg"
                  width="120"
                  height="40"
                  alt="Logo"
                  className="aspect-[3/1] overflow-hidden rounded-lg object-contain object-center"
                />
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
                Senior Product Designer
              </h2>
              <p className="text-gray-500 dark:text-gray-400">Full-Time</p>
            </div>

            {/* job description & requirements */}
            <div className="space-y-4 text-lg/relaxed lg:space-y-6 xl:text-xl/relaxed">
              {/* description */}
              <div>
                <h3 className="text-xl font-semibold">Description</h3>
                <p className="text-justify">
                  We are looking for a Senior Product Designer who will be
                  responsible for delivering the best online user experience,
                  which makes your role extremely important for our success and
                  ensuring customer satisfaction and loyalty. The ideal
                  candidate will have experience in working with numerous
                  different design platforms such as mobile and desktop. The
                  candidate will also have experience in working with complex
                  backend and frontend systems.
                </p>
              </div>

              {/* requirements */}
              <div>
                <h3 className="text-xl font-semibold">Requirements</h3>
                <ul className="list-disc list-inside">
                  <li>5+ years of experience as a Product Designer</li>
                  <li>
                    Proficient in design software such as Figma, Sketch, or
                    Adobe XD
                  </li>
                  <li>Experience with user interface design</li>
                  <li>Strong understanding of usability principles</li>
                </ul>
              </div>
            </div>

            {/* cover letter */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Cover Letter</h3>
              <textarea
                className="w-full rounded-md border"
                rows={9}
              ></textarea>
            </div>
          </div>

          {/* content left side of the middle position */}
          <div className="space-y-4 border rounded-lg border-gray-200 lg:col-start-1 lg:row-start-1 lg:space-y-6 dark:border-gray-800">
            <div className="p-4">
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-sm font-normal">San Francisco, CA</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Salary Range</h3>
              <p className="text-sm font-normal">$120,000 - $150,000</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Application Deadline</h3>
              <p className="text-sm font-normal">April 30, 2023</p>
            </div>
          </div>

          {/* content bottom side of the middle position */}
          <div className="flex flex-col gap-2 lg:col-start-4 lg:gap-4 justify-center">
            <button>
              <Button lebel={"Apply"} />
            </button>
          </div>
        </div>

        {/* content in bottom position */}
        <div className="grid gap-10 py-8 text-base md:gap-16 md:px-6 lg:grid-cols-4 lg:gap-12 xl:gap-20">
          <div className="space-y-4 lg:col-start-1 lg:col-span-3 xl:space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Company Info
              </h2>
              <div className="inline-flex items-center gap-2 text-sm font-medium md:gap-4">
                <img
                  src="https://marketplace.canva.com/EAFK6GIdp20/1/0/1600w/canva-blue-%26-black-simple-company-logo-nwGjVuSJ-D0.jpg"
                  width="120"
                  height="40"
                  alt="Logo"
                  className="aspect-[3/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <a
                  className="text-gray-500 underline dark:text-gray-400"
                  href="#"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default JobDeatilsPage;
