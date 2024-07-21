"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function PhotoPagination(props) {
  const { displayCount, imgCount, selectedPage, setSelectedPage, numOfPages } =
    props;

  const activePageColor = "bg-emerald-700";
  const pageNumberClassNames = [
    {
      className:
        "relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white",
    },
    {
      className:
        "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
    },
  ];

  const pageHandler = (e, num) => {
    e.preventDefault();
    if (num === "-") {
      setSelectedPage(selectedPage - 1);
    } else if (num === "+") {
      setSelectedPage(selectedPage + 1);
    } else {
      setSelectedPage(num);
    }
  };

  return (
    <div className="flex border-t items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        {selectedPage == 1 ? (
          <button
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-gray-600 px-4 py-2 text-sm font-medium text-white opacity-20"
            disabled
          >
            Previous
          </button>
        ) : (
          <button
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={(e) => {
              pageHandler(e, "-");
            }}
          >
            Previous
          </button>
        )}
        {numOfPages[0] == selectedPage ? (
          <button
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-gray-600 px-4 py-2 text-sm font-medium text-white opacity-20"
            disabled
          >
            Next
          </button>
        ) : (
          <button
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={(e) => {
              pageHandler(e, "+");
            }}
          >
            Next
          </button>
        )}
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">{displayCount}</span> of{" "}
            <span className="font-medium">{imgCount}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon
                className="h-5 w-5"
                aria-hidden="true"
                onClick={(e) => {
                  pageHandler(e, "-");
                }}
              />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {numOfPages.map((num, index) => {
              return (
                <a
                  key={index}
                  className={`${pageNumberClassNames[0].className} ${activePageColor}`}
                  onClick={(e) => {
                    pageHandler(e, num);
                  }}
                >
                  1
                </a>
              );
            })}
            <button href="#" className={`${pageNumberClassNames[1].className}`}>
              2
            </button>
            <button
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </button>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <button
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </button>
            <button
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </button>
            <button
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </button>
            <button
              
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={(e) => {
                if (selectedPage < numOfPages) {
                  pageHandler(e, "+");
                }
              }}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
