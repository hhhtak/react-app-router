"use client";

import { Note } from "@/types";
import { useState } from "react";

export const notesAction = () => {
  const [content, setContent] = useState("");
  const [dataSource, setDataSource] = useState<Note[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSaveClick = async () => {
    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    const notes = await response.json();
    setDataSource(notes);
    setContent("");
  };

  const handleDeleteClick = async (id: number) => {
    const response = await fetch(`/api/notes/${id}`, {
      method: "DELETE",
    });

    const notes = await response.json();
    setDataSource(notes);
  };

  return { handleInputChange, handleSaveClick, handleDeleteClick, content, dataSource };
};
