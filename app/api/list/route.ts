import { NextResponse } from "next/server";
import { prisma } from '../../../util/client';

export async function GET(request: Request, res: any) {
  const data = await prisma.person.findMany();
  
  
  return NextResponse.json(data)
}
