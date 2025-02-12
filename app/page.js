"use client";
import { UIsparkle } from "@/Components/UIsparkle";
import { Focuscards } from "@/Components/Focuscards";
import Ourclients from "@/Components/Ourclients";
import Ourservices from "@/Components/Ourservices";

export default function Home() {
  return (
    <>
      <UIsparkle />
      <Ourclients />
      <Ourservices />
      <Focuscards />
    </>
  );
}
