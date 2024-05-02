import { prisma } from "../../../util/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const person = await request.json();
  try {
    const data = await prisma.person.create({ data: person });
    return new Response("success");
  } catch (error) {
    return new Response("error", { status: 500 }); // Handle errors
  }
}
