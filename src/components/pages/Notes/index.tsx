"use client";
import { Button } from "@/components/atoms/Button";
import { Note } from "@/types";
import { FC, useEffect } from "react";
import { notesAction } from "./notes-actions";

type Props = {
  notes: Note[];
};

export const Notes: FC<Props> = (props) => {
  const { notes: notesData } = props;
  const { handleSaveClick, setNotes, notes } = notesAction();

  // 画面起動時にAPIから取得した値を設定する
  // そのあとはAPI実行時に値を設定するので動かさない
  useEffect(() => {
    setNotes(notesData);
  }, []);

  return (
    <>
      <form className="mb-6" action={handleSaveClick}>
        <input type="text" name="notes" className="border-2 mr-3 w-80" />
        <Button type="submit">Created</Button>
      </form>
      <table>
        <thead className="bg-slate-300">
          <tr className="[&>th]:w-40">
            <th>Id</th>
            <th>Content</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {notes.map((post) => (
            <tr key={post.id} className="[&>td]:w-40 [&>td]:text-center [&>td]:p-2">
              <td>{post.id}</td>
              <td>{post.content}</td>
              <td>{new Date(post.created).toLocaleDateString("ja")}</td>
              <td>
                <Button size={"small"}>delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
