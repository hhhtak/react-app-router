import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

const getAllNotes = async () => {
  const notes = await prisma.notes.findMany();
  return notes;
};

export const GET = async () => {
  const notes = await getAllNotes();
  return NextResponse.json(notes);
};

export const POST = async (request: Request) => {
  const { content } = await request.json();

  await prisma.notes.create({
    data: {
      content,
    },
  });

  const notes = await getAllNotes();
  return NextResponse.json(notes);
};

export const DELETE = async (request: NextRequest) => {
  const id = parseInt(request.nextUrl.searchParams.get("id") || "");
  await prisma.notes.delete({
    where: {
      id,
    },
  });

  const notes = await getAllNotes();
  return NextResponse.json(notes);
};
