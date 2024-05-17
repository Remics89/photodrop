"use client";
import { CldImage } from "next-cloudinary";

export const PhotoLibrary = (props) => {
  const { data } = props;
  return (
    <div className="md:flex flex-wrap flex-row justify-evenly">
      {data.map((photoData, index) => {
        return (
          <div key={index}>
            <CldImage
              className="p-5"
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
  );
};
