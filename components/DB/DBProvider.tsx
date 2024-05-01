import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const useDBProvider = () => {
  const getAll = async () => {
    const data = await prisma.person.findMany();
    return data;
  };
  const persons = getAll();

  return {
    persons,
  };
};
