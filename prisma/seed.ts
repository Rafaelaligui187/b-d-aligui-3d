/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const seed = async () => {
  await prisma.post.createMany({
    data: [
      { title: 'title-1', content: 'dummy1' },
      { title: 'title-2', content: 'dummy2' },
    ],
  });
};
seed();