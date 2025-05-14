import { NextResponse } from "next/server";
import { prisma } from "../../../../util/client";

// export async function GET(request: Request, res: any) {
//   const data = await prisma.person.findMany();

//   return NextResponse.json(data)
// }

export async function DELETE(request: Request, res: any) {
  const url = new URL(request.url);
  const idPerson = url.pathname.split("/").pop();
  await prisma.person.delete({ where: { id: Number(idPerson) } }); // Use 'where' for filtering
  return NextResponse.json("data");
}
