import { prisma } from "../../../../util/client";
import { NextResponse } from "next/server";


export async function GET(request: Request, res: any) {
  const url = new URL(request.url);
  const idPerson = url.pathname.split("/").pop();
  const data = await prisma.person.findUnique({ where: { id: Number(idPerson) } });

  return NextResponse.json(data)
}