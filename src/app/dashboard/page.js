import { Suspense } from "react";
import prisma from "../../../prisma/prisma";
import { PhotoLibrary } from "../components/PhotoLib";
import { NoImages } from "../components/noImages";

export default async function Page() {
  const images = await prisma.photos.findMany({
    where: { owner: "testuser" },
  });

  return (
    <div>
      {images.length > 0 ? (
        <Suspense>
          <PhotoLibrary data={images} />
        </Suspense>
      ) : (
        <NoImages />
      )}
    </div>
  );
}
