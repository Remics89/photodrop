"use client";
import { CldImage } from "next-cloudinary";

export default function RenderImages(props) {
  const { images } = props;

  return (
    <div className="md:flex flex-wrap flex-row justify-evenly px-5">
      {images.map((photoData, index) => {
        if (index === 0) {
          photoData.priority = true;
        }
        return (
          <div key={index}>
            <CldImage
              className="m-2 shadow-sm shadow-black hover:shadow-md hover:shadow-black mobile:my-2 mobile:mx-0 mobile:w-100%"
              width={600}
              height={450}
              src={photoData.path}
              alt={photoData.title || "alt placeholder"}
              title={photoData.title}
              priority={photoData.priority}
            />
          </div>
        );
      })}
    </div>
  );
}
