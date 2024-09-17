import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import DynamicRange from "./DynamicRange";

const Filter = ({
  hide,
  range,
  setRange,
  companys,
  setCompanys,
  companyNames,
}) => {
  const handleFilters = (e) => {
    const targetInput = e.target;
    const filterValue = targetInput.value;
    const filterChecked = targetInput.checked;

    // company filter
    if (!companys?.includes(filterValue) && filterChecked) {
      setCompanys([...companys, filterValue]);

      //
    } else if (companys?.includes(filterValue) && !filterChecked) {
      const updateBrand = companys.filter((value) => value !== filterValue);

      setCompanys(updateBrand);
    }
  };

  return (
    <form
      className={`mt-4 lg:mt-0 border-t lg:border-t-0 border-gray-200 ${
        hide && "hidden"
      }  lg:block`}
    >
      {/* price range */}
      <div className="px-4 lg:px-0 py-6">
        <DynamicRange range={range} setRange={setRange} />
      </div>

      {/* filters start here */}

      <Disclosure
        defaultOpen
        as="div"
        className="border-t lg:border-t-0 lg:border-b border-gray-200 px-4 lg:px-0 py-6"
      >
        {/* filter outside (title and collapse toggle button) */}
        <h3 className="-mx-2 lg:mx-0 -my-3 flow-root">
          <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 lg:px-0 py-3 lg:text-sm text-gray-400 hover:text-gray-500">
            {/* title */}
            <span className="font-medium text-secondary">Company</span>

            {/* collapse toggle button */}
            <span className="ml-6 flex items-center">
              <PlusIcon
                aria-hidden="true"
                className="h-5 w-5 group-data-[open]:hidden"
              />
              <MinusIcon
                aria-hidden="true"
                className="h-5 w-5 [.group:not([data-open])_&]:hidden"
              />
            </span>
          </DisclosureButton>
        </h3>

        {/* filter inside view start here */}
        <DisclosurePanel className="pt-6">
          <div className="space-y-6">
            {companyNames?.map((option) => (
              <div key={option?._id} className="flex items-center">
                {/* input checkbox */}
                <input
                  onChange={(e) => handleFilters(e)}
                  defaultValue={option?.companyName}
                  defaultChecked={option?.checked}
                  id={option?._id}
                  name={option?.companyName?.split(" ")?.join("")}
                  type="checkbox"
                  className="h-4 w-4 rounded accent-primary cursor-pointer"
                />

                {/* input label */}
                <label
                  htmlFor={option?._id}
                  className="ml-3 min-w-0 flex-1 text-gray-500 cursor-pointer"
                >
                  {option?.companyName}
                </label>
              </div>
            ))}
          </div>
        </DisclosurePanel>
        {/* filter inside view end here */}
      </Disclosure>

      {/* filters end here */}
    </form>
  );
};

export default Filter;
