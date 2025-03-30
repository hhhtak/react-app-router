"use client";

import { Note } from "@/types";
import { useState } from "react";

export const notesAction = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setContent(event.target.value);
  // };

  const handleSaveClick = async (formData: FormData) => {
    const content = formData.get("notes");
    const response = await fetch(`/api/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    const notes = await response.json();
    setNotes(notes);
  };

  const handleDeleteClick = async (id: number) => {
    const response = await fetch(`${process.env.BASE_URL}/api/notes/${id}`, {
      method: "DELETE",
    });

    const notes = await response.json();
    setNotes(notes);
  };

  return { handleSaveClick, handleDeleteClick, notes, setNotes };
};
