"use client";
import { Note } from "@/types";
import { FC } from "react";

type Props = {
  notes: Note[];
};

export const Notes: FC<Props> = (props) => {
  const { notes } = props;
  console.log("data1111111:", notes);

  return <div>hogehogehoge</div>;
};
