import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();
export async function GET(request: Request, res: any) {
  const data = await prisma.person.findMany();
  return res.status(200).json({ name: "John Doe" });
  //   return new Response("data");
}
