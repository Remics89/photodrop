"use client";
import { CldImage } from "next-cloudinary";

export default function Page() {
  return (
    <div>

      <div className="md:flex flex-wrap flex-row justify-evenly">
        <CldImage
          className="p-5"
          width={600}
          height={450}
          src="docs/models-AA"
          sizes="100vw"
          alt="Auto Assault"
          title="Auto Assault"
        />
        <CldImage
          className="p-5"
          width={600}
          height={450}
          src="docs/models-57"
          sizes="100vw"
          alt="Hunt: Showdown"
          title="Hunt: Showdown"
        />
        <CldImage
          className="p-5"
          width={600}
          height={450}
          src="docs/models-22"
          sizes="100vw"
          alt="No Man's Sky"
          title="No Man's Sky"
        />
      </div>
    </div>
  );
}
