const Pagination = ({
  totalJobsNumber,
  parPageJob,
  activePageNumber,
  setActivePageNumber,
}) => {
  //
  let numberOfPage;
  if (totalJobsNumber > 0) {
    numberOfPage = Math.ceil(totalJobsNumber / parPageJob);
  }

  const pagesNumber = [];
  for (let i = 0; i < numberOfPage; i++) {
    pagesNumber.push(i);
  }

  const handlePreviousPage = () => {
    if (activePageNumber > 0) {
      setActivePageNumber(activePageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (activePageNumber < pagesNumber.length - 1) {
      setActivePageNumber(activePageNumber + 1);
    }
  };

  return (
    <>
      {pagesNumber?.length === 0 ? (
        <></>
      ) : (
        <ul className="flex gap-4 justify-center mt-12">
          {/* pre button */}
          <button
            onClick={handlePreviousPage}
            className="flex items-center justify-center shrink-0 cursor-pointer text-base font-bold text-primary w-10 h-10 rounded-lg"
          >
            Prev
          </button>

          {/* page number */}
          {pagesNumber?.map((pageNumber) => (
            <button
              onClick={() => setActivePageNumber(pageNumber)}
              className={`flex items-center justify-center shrink-0 hover:bg-secondary  border-2 cursor-pointer text-base font-bold text-primary-content w-10 h-10 rounded-lg ${
                pageNumber === activePageNumber &&
                "bg-primary  border-2 border-pribg-primary text-white"
              }`}
              key={pageNumber}
            >
              {pageNumber + 1}
            </button>
          ))}

          {/* next button */}
          <button
            onClick={handleNextPage}
            className="flex items-center justify-center shrink-0 cursor-pointer text-base font-bold text-primary w-10 h-10 rounded-lg"
          >
            Next
          </button>
        </ul>
      )}
    </>
  );
};

export default Pagination;
