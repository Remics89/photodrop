"use client";
import { CldImage } from "next-cloudinary";

export default function Page() {
  return (
    <div>
      <h1 className="flex place-content-center rounded border-4 border-red-600 ">
        Welcome to your PhotoDrop
        Dashboard!
      </h1>
      <CldImage
        className="p-5"
        width={800}
        height={600}
        src="docs/models-AA"
        sizes="100vw"
        alt="Auto Assault"
        title="Auto Assault"
      />
      <CldImage
        className="p-5"
        width={800}
        height={600}
        src="docs/models-57"
        sizes="100vw"
        alt="Hunt: Showdown"
        title="Hunt: Showdown"
      />
    </div>
  );
};
