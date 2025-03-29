"use client";
import { Note } from "@/types";
import { FC } from "react";

type Props = {
  notes: Note[];
};

export const Notes: FC<Props> = (props) => {
  const { notes } = props;

  return (
    <>
      {notes.map((post) => (
        <div key={post.id}>
          <p>id:{post.id}</p>
          <p>content:{post.content}</p>
          <p>updated:{post.updated}</p>
          <p>created:{post.created}</p>
        </div>
      ))}
    </>
  );
};
