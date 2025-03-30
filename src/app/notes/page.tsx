import { Notes } from "@/components/pages/Notes";
import type { Note } from "@/types";

export default async function NotesPage() {
  // server側で実装するときはフルパスが必要になるため、envから値を取得する
  const response = await fetch(`${process.env.BASE_URL}/api/notes`);
  const notes: Note[] = await response.json();

  return <Notes notes={notes} />;
}
