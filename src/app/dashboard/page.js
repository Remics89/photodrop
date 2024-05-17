import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;
import { PhotoLibrary } from "../components/generatePhotoLib";


export default async function Page() {

  
  const data = await prisma.photos.findMany({
      where: {owner: 1}
    })

  return (
    <div>
      <PhotoLibrary data={data} />
    </div>
  );

  
}
