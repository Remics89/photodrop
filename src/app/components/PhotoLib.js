"use client";
import { Fragment } from "react";
import PhotoPagination from "./pagination";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import RenderImages from "./imageRender";

export const PhotoLibrary = (props) => {
  const { data } = props;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const totalImageCount = data.length;

  // Array of numbers for user to select number of images per page
  const imageDisplayCountOptions = [15, 30, 45];

  // grab and store search params
  const showCount = searchParams.get('show') || 15;
  const showPage = searchParams.get('page') || 1;

  // math function determining amount of image pages to provide
  const numberOfPages = [Math.ceil(totalImageCount / (showCount || 15))];

  // create an array containing the block of images corresponding to the selected
  // count and current page number
  const createImageArray = (images, count, page) => {
    let imageArray = [];
    let blockSize = count * page;
    
    for(let index = 0; index < blockSize; index++){
      imageArray.push(images[index])
    }
    return imageArray;
  }

  // store the return array from the image array function
  const imageBlock = createImageArray(data, showCount, showPage);

  // handler function for select on change
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
          totalImageCount={totalImageCount}
          numberOfPages={numberOfPages}
          showPage={showPage}
          showCount={showCount}
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
            defaultValue={showCount || "15"}
            onChange={(e) => selectHandler(e)}
          >
            {imageDisplayCountOptions.map((num, index) => {
              return (
                <option value={num} key={index}>
                  {num}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <RenderImages images={imageBlock} showCount={showCount} />

      <PhotoPagination
        totalImageCount={totalImageCount}
        numberOfPages={numberOfPages}
        showPage={showPage}
        showCount={showCount}
      />
    </Fragment>
  );
};
