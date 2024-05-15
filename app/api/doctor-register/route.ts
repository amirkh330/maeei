import { NextResponse } from "next/server";
import { prisma } from "../../../util/client";

export async function POST(request: Request) {
  const person = await request.json();
  try {
    const data = await prisma.person.create({ data: person });
    return new Response("success");
  } catch (error) {
    return new Response("error", { status: 500 }); // Handle errors
  }
}

export async function PUT(request: Request) {
  const person = await request.json();
  try {
    const data = await prisma.person.update({
      where: { id: Number(person.id) },
      data: person,
    });
    return new Response("success");
  } catch (error) {
    return new Response("error", { status: 500 }); // Handle errors
  }
}
