"use client";
import { Note } from "@/types";
import { FC } from "react";

type Props = {
  notes: Note[];
};

export const Notes: FC<Props> = (props) => {
  const { notes } = props;
  console.log("notes:", notes);

  return (
    <div>
      {notes.map((post) => (
        <div key={post.id}>
          {/* <p>id:{post.id}</p> */}
          <p>content:{post.content}</p>
          {/* <p>updated:{new Date(post.updated).toLocaleDateString()}</p> */}
          <p>created:{post.created}</p>
        </div>
      ))}
    </div>
  );
};
