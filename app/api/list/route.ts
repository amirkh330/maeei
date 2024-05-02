import { NextResponse } from "next/server";
import { prisma } from '../../../util/client';

export async function GET(request: Request, res: any) {
  const data = await prisma.person.findMany();
  
  
  return NextResponse.json(data)
}



export async function DELETE(request: Request, res: any) {
  const data = await prisma.person.deleteMany();
  
  
  return NextResponse.json(data)
}