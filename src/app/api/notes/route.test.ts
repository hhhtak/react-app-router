import { Note } from "@/types/Note";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { beforeEach, describe, expect, Mock, test, vi } from "vitest";
import { DELETE, GET, POST } from "./route";

// Mock PrismaClient
vi.mock("@prisma/client", () => {
  const mockPrisma = {
    notes: {
      findMany: vi.fn(),
      create: vi.fn(),
      delete: vi.fn(),
    },
  };
  return { PrismaClient: vi.fn(() => mockPrisma) };
});

const prisma = new PrismaClient();

describe("Notes API", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("GET はすべてのノートを返す", async () => {
    const mockNotes: Note[] = [
      {
        key: "1",
        id: 1,
        content: "Test note",
        updated: new Date().toISOString(),
        created: new Date().toISOString(),
      },
    ];
    (prisma.notes.findMany as Mock).mockResolvedValue(mockNotes);

    const response = await GET();
    const data = await response.json();

    expect(prisma.notes.findMany).toHaveBeenCalledOnce();
    expect(data).toEqual(mockNotes);
  });

  test("POST は新しいノートを作成し、更新されたノートを返す", async () => {
    const mockNotes: Note[] = [
      {
        key: "1",
        id: 1,
        content: "Test note",
        updated: new Date().toISOString(),
        created: new Date().toISOString(),
      },
      {
        key: "2",
        id: 2,
        content: "New note",
        updated: new Date().toISOString(),
        created: new Date().toISOString(),
      },
    ];
    const createdNote = {
      id: 2,
      content: "New note",
      updated: new Date(),
      created: new Date(),
    };
    (prisma.notes.create as Mock).mockResolvedValue(createdNote);
    (prisma.notes.findMany as Mock).mockResolvedValue(mockNotes);

    const request = new Request("http://localhost/api/notes", {
      method: "POST",
      body: JSON.stringify({ content: "New note" }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(prisma.notes.create).toHaveBeenCalledWith({
      data: { content: "New note" },
    });
    expect(prisma.notes.findMany).toHaveBeenCalled();
    expect(data).toEqual(mockNotes);
  });

  test("DELETE はノートを削除し、更新されたノートを返す", async () => {
    const mockNotes: Note[] = [
      {
        key: "2",
        id: 2,
        content: "Remaining note",
        updated: new Date().toISOString(),
        created: new Date().toISOString(),
      },
    ];
    const deletedNote = {
      id: 1,
      content: "Deleted note",
      updated: new Date(),
      created: new Date(),
    };
    (prisma.notes.delete as Mock).mockResolvedValue(deletedNote);
    (prisma.notes.findMany as Mock).mockResolvedValue(mockNotes);

    const request = new NextRequest("http://localhost/api/notes?id=1");
    const response = await DELETE(request);
    const data = await response.json();

    expect(prisma.notes.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(prisma.notes.findMany).toHaveBeenCalled();
    expect(data).toEqual(mockNotes);
  });
});
