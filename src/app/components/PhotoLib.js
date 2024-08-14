"use client";
import { Fragment, useState } from "react";
import PhotoPagination from "./pagination";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import RenderImages from "./imageRender";

export const PhotoLibrary = (props) => {
  const { data, totalImageCount } = props;
  const [displayCount, setDisplayCount] = useState(15 || 30 || 45);
  const [selectedPage, setSelectedPage] = useState(1);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const imageCountOptions = [15, 30, 45];
  const numOfPages = [Math.ceil(totalImageCount / (displayCount || 15))];

  const selectHandler = (e) => {
    e.preventDefault();
    const selectedImageCount = new URLSearchParams(searchParams);
    selectedImageCount.set("show", e.target.value);
    router.push(pathname + "?" + selectedImageCount);
  };

  return (
    <Fragment>
      <div className="relative top-0 right-0 h-40 w-100vw">
        My Photos
        <PhotoPagination
          displayCount={displayCount}
          totalImageCount={totalImageCount}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          numOfPages={numOfPages}
        />
        <div className="flex right-0 flex-col w-15 mr-5">
          <label
            htmlFor="location"
            className="block text-sm font-medium place-self-end leading-6 text-gray-900"
          >
            Show:
          </label>
          <select
            name="imageCountOptions"
            className="block w-fit place-self-end rounded-md border-0 py-1.5 pl-3 pr-5 hover:shadow-md text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6"
            defaultValue="15"
            onChange={(e) => selectHandler(e)}
          >
            {imageCountOptions.map((num, index) => {
              return (
                <option value={num} key={index}>
                  {num}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <RenderImages images={data} />

      <PhotoPagination
        displayCount={displayCount}
        totalImageCount={totalImageCount}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        numOfPages={numOfPages}
      />
    </Fragment>
  );
};
