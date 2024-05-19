"use client";
import { CldImage } from "next-cloudinary";
import { Fragment, useState } from "react";
import PhotoPagination from "./pagination";

export const PhotoLibrary = (props) => {
  const { data, imgCount } = props;
  const [displayCount, setDisplayCount] = useState(15);
  const [selectedPage, setSelectedPage] = useState(Number);

  const count = [15, 30, 45];

  const selectHandler = (e) => {
    e.preventDefault();
    setDisplayCount(e.target.value);
  };

  return (
    <Fragment>
      <div className="relative top-0 right-0 h-40 w-100vw">
        My Photos
        <PhotoPagination
          displayCount={displayCount}
          imgCount={imgCount}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="flex right-0 flex-col w-15 mr-5">
          <label
            htmlFor="location"
            className="block text-sm font-medium place-self-end leading-6 text-gray-900 "
          >
            Show:
          </label>
          <select
            id="count"
            name="count"
            className="block w-fit place-self-end rounded-md border-0 py-1.5 pl-3 pr-5 hover:shadow-md text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="15"
            onChange={(e) => selectHandler(e)}
          >
            {count.map((num, index) => {
              return (
                <option value={num} key={index}>
                  {num}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="md:flex flex-wrap flex-row justify-evenly">
        {data.map((photoData, index) => {
          while (index < displayCount)
            return (
              <div key={index}>
                <CldImage
                  className="m-2 shadow-sm shadow-black hover:shadow-lg hover:shadow-black rounded-lg mobile:my-4 mobile:mx-0 mobile:w-100%"
                  width={600}
                  height={450}
                  src={photoData.path}
                  sizes="100vw"
                  alt="Hunt: Showdown"
                  title="Hunt: Showdown"
                />
              </div>
            );
        })}
      </div>
      <PhotoPagination
          displayCount={displayCount}
          imgCount={imgCount}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
    </Fragment>
  );
};
