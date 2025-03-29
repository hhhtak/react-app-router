import { Notes } from "@/components/pages/Notes";
import type { Note } from "@/types";

export default async function NotesPage() {
  const response = await fetch(`${process.env.BASE_URL}/api/notes`);
  const notes: Note[] = await response.json();
  const transformedNotes = notes.map((note) => {
    return {
      key: note.key,
      id: note.id,
      content: note.content,
      updated: new Date(note.updated).toLocaleDateString("ja"),
      created: new Date(note.created).toLocaleDateString("ja"),
    };
  });

  return <Notes notes={transformedNotes} />;
}
