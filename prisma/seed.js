import prisma from "./prisma";

async function main() {
  let seedPhotos = [
    { owner: 1, path: "docs/models" },
    { owner: 1, path: "docs/models-2" },
    { owner: 1, path: "docs/models-3" },
    { owner: 1, path: "docs/models-4" },
    { owner: 1, path: "docs/models-5" },
    { owner: 1, path: "docs/models-6" },
    { owner: 1, path: "docs/models-7" },
    { owner: 1, path: "docs/models-8" },
    { owner: 1, path: "docs/models-9" },
    { owner: 1, path: "docs/models-10" },
    { owner: 1, path: "docs/models-11" },
    { owner: 1, path: "docs/models-12" },
    { owner: 1, path: "docs/models-13" },
    { owner: 1, path: "docs/models-14" },
    { owner: 1, path: "docs/models-15" },
    { owner: 1, path: "docs/models-16" },
    { owner: 1, path: "docs/models-17" },
    { owner: 1, path: "docs/models-18" },
    { owner: 1, path: "docs/models-19" },
    { owner: 1, path: "docs/models-20" },
    { owner: 1, path: "docs/models-21" },
    { owner: 1, path: "docs/models-22" },
    { owner: 1, path: "docs/models-23" },
    { owner: 1, path: "docs/models-24" },
    { owner: 1, path: "docs/models-25" },
    { owner: 1, path: "docs/models-26" },
    { owner: 1, path: "docs/models-27" },
    { owner: 1, path: "docs/models-28" },
    { owner: 1, path: "docs/models-29" },
    { owner: 1, path: "docs/models-30" },
    { owner: 1, path: "docs/models-31" },
    { owner: 1, path: "docs/models-32" },
    { owner: 1, path: "docs/models-33" },
    { owner: 1, path: "docs/models-34" },
    { owner: 1, path: "docs/models-35" },
    { owner: 1, path: "docs/models-36" },
    { owner: 1, path: "docs/models-37" },
    { owner: 1, path: "docs/models-38" },
    { owner: 1, path: "docs/models-39" },
    { owner: 1, path: "docs/models-40" },
    { owner: 1, path: "docs/models-41" },
    { owner: 1, path: "docs/models-42" },
    { owner: 1, path: "docs/models-43" },
    { owner: 1, path: "docs/models-44" },
    { owner: 1, path: "docs/models-45" },
    { owner: 1, path: "docs/models-46" },
    { owner: 1, path: "docs/models-47" },
    { owner: 1, path: "docs/models-48" },
    { owner: 1, path: "docs/models-49" },
    { owner: 1, path: "docs/models-51" },
    { owner: 1, path: "docs/models-52" },
    { owner: 1, path: "docs/models-55" },
    { owner: 1, path: "docs/models-56" },
    { owner: 1, path: "docs/models-57" },
    { owner: 1, path: "docs/models-58" },
    { owner: 1, path: "docs/models-59" },
    { owner: 1, path: "docs/models-60" },
    { owner: 1, path: "docs/models-61" },
    { owner: 1, path: "docs/models-62" },
    { owner: 1, path: "docs/models-63" },
    { owner: 1, path: "docs/models-64" },
    { owner: 1, path: "docs/models-65" },
  ];

  await Promise.all(
    seedPhotos.map(async (photo) => {
      await prisma.photos.create({
        data: photo,
      });
    })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
