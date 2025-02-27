import { UIsparkle } from "@/components/UIsparkle";
import { Focuscards } from "@/components/Focuscards";
import Ourclients from "@/components/Ourclients";
import Ourservices from "@/components/Ourservices";

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
