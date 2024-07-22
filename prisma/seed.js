const {PrismaClient} = require('@prisma/client');
const { user } = require('pg/lib/defaults');
const prisma = new PrismaClient();

async function main() {
  const seedPhotos = [
    { owner: "testuser", path: "docs/models" },
    { owner: "testuser", path: "docs/models-2" },
    { owner: "testuser", path: "docs/models-3" },
    { owner: "testuser", path: "docs/models-4" },
    { owner: "testuser", path: "docs/models-5" },
    { owner: "testuser", path: "docs/models-6" },
    { owner: "testuser", path: "docs/models-7" },
    { owner: "testuser", path: "docs/models-8" },
    { owner: "testuser", path: "docs/models-9" },
    { owner: "testuser", path: "docs/models-10" },
    { owner: "testuser", path: "docs/models-11" },
    { owner: "testuser", path: "docs/models-12" },
    { owner: "testuser", path: "docs/models-13" },
    { owner: "testuser", path: "docs/models-14" },
    { owner: "testuser", path: "docs/models-15" },
    { owner: "testuser", path: "docs/models-16" },
    { owner: "testuser", path: "docs/models-17" },
    { owner: "testuser", path: "docs/models-18" },
    { owner: "testuser", path: "docs/models-19" },
    { owner: "testuser", path: "docs/models-20" },
    { owner: "testuser", path: "docs/models-21" },
    { owner: "testuser", path: "docs/models-22" },
    { owner: "testuser", path: "docs/models-23" },
    { owner: "testuser", path: "docs/models-24" },
    { owner: "testuser", path: "docs/models-25" },
    { owner: "testuser", path: "docs/models-26" },
    { owner: "testuser", path: "docs/models-27" },
    { owner: "testuser", path: "docs/models-28" },
    { owner: "testuser", path: "docs/models-29" },
    { owner: "testuser", path: "docs/models-30" },
    { owner: "testuser", path: "docs/models-31" },
    { owner: "testuser", path: "docs/models-32" },
    { owner: "testuser", path: "docs/models-33" },
    { owner: "testuser", path: "docs/models-34" },
    { owner: "testuser", path: "docs/models-35" },
    { owner: "testuser", path: "docs/models-36" },
    { owner: "testuser", path: "docs/models-37" },
    { owner: "testuser", path: "docs/models-38" },
    { owner: "testuser", path: "docs/models-39" },
    { owner: "testuser", path: "docs/models-40" },
    { owner: "testuser", path: "docs/models-41" },
    { owner: "testuser", path: "docs/models-42" },
    { owner: "testuser", path: "docs/models-43" },
    { owner: "testuser", path: "docs/models-44" },
    { owner: "testuser", path: "docs/models-45" },
    { owner: "testuser", path: "docs/models-46" },
    { owner: "testuser", path: "docs/models-47" },
    { owner: "testuser", path: "docs/models-48" },
    { owner: "testuser", path: "docs/models-49" },
    { owner: "testuser", path: "docs/models-51" },
    { owner: "testuser", path: "docs/models-52" },
    { owner: "testuser", path: "docs/models-55" },
    { owner: "testuser", path: "docs/models-56" },
    { owner: "testuser", path: "docs/models-57" },
    { owner: "testuser", path: "docs/models-58" },
    { owner: "testuser", path: "docs/models-59" },
    { owner: "testuser", path: "docs/models-60" },
    { owner: "testuser", path: "docs/models-61" },
    { owner: "testuser", path: "docs/models-62" },
    { owner: "testuser", path: "docs/models-63" },
    { owner: "testuser", path: "docs/models-64" },
    { owner: "testuser", path: "docs/models-65" },
  ];

  const users = [
    {
      email: "testuser@123.com",
      firstName: "Test",
      lastName: "User",
      userName: "testuser"
    }
  ]

  await Promise.all(
    users.map(async (user) => {
      await prisma.user.create({
        data: user
      })
    })
  )

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
