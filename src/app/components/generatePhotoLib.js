"use client";
import { CldImage } from "next-cloudinary";
import { Fragment, useEffect, useState } from "react";
import PhotoPagination from "./pagination";

export const PhotoLibrary = (props) => {
  const { data, imgCount } = props;
  const [displayCount, setDisplayCount] = useState(15);
  const [selectedPage, setSelectedPage] = useState(1);
  const [imgBlocks, setImgBlocks] = useState();

  const count = [15, 30, 45];
  const numOfPages = [Math.ceil(imgCount / displayCount)];

  const selectHandler = (e) => {
    e.preventDefault();
    setDisplayCount(e.target.value);
  };

  useEffect(() => {
    let block = [];
    let innerBlock = [];

    data.forEach((obj, i) => {
      if (i < imgCount) {
        if (innerBlock.length < displayCount) {
          innerBlock.push(obj);
          if (i === imgCount - 1) {
            block.push(innerBlock);
          }
        } else {
          block.push(innerBlock);
          innerBlock = [];
          innerBlock.push(obj);
        }
      }
    });
    setImgBlocks(block);
  }, [data, displayCount, imgCount]);

  useEffect(() => {
    if (window.localStorage.getItem("SelectedPage") === undefined) {
      window.localStorage.setItem("SelectedPage", "1");
    }
    setSelectedPage(parseInt(window.localStorage.getItem("SelectedPage")));
  }, []);

  return (
    <Fragment>
      <div className="relative top-0 right-0 h-40 w-100vw">
        My Photos
        <PhotoPagination
          displayCount={displayCount}
          imgCount={imgCount}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          numOfPages={numOfPages}
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
            className="block w-fit place-self-end rounded-md border-0 py-1.5 pl-3 pr-5 hover:shadow-md text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6"
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
      <div className="md:flex flex-wrap flex-row justify-evenly px-5">
        {!imgBlocks ? null : imgBlocks[selectedPage -1].map((photoData, index) => {
          while (index < displayCount)
            return (
              <div key={index}>
                <CldImage
                  className="m-2 shadow-sm shadow-black hover:shadow-lg hover:shadow-black mobile:my-2 mobile:mx-0 mobile:w-100% "
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
        numOfPages={numOfPages}
      />
    </Fragment>
  );
};
