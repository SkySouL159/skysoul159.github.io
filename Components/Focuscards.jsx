import { FocusCards } from "@/Components/ui/focus-cards";

export function Focuscards() {
  const cards = [
    {
      title: "ARV REALTY",
      src: "/WorkCards/arv.png",
    },
    {
      title: "Coffee Cup India",
      src: "/WorkCards/cci.png",
    },
    {
      title: "Foreign Routes",
      src: "/WorkCards/fr.png",
    },
    {
      title: "HRMD",
      src: "/WorkCards/hermod.jpg",
    },
    {
      title: "Hindustan Unilever",
      src: "/WorkCards/hul.jpg",
    },
    {
      title: "HAZELCOP",
      src: "/WorkCards/hzc.png",
    },
    {
      title: "Indie Grow",
      src: "/WorkCards/ig.png",
    },
    {
      title: "MYFITNESS",
      src: "/WorkCards/mf.png",
    },
    {
      title: "National Institute of Fashion Technology",
      src: "/WorkCards/nift.jpg",
    },
    {
      title: "nuts & jars",
      src: "/WorkCards/nutsnjar.jpg",
    },
    {
      title: "S Creation Films",
      src: "/WorkCards/sf.png",
    },
    {
      title: "Tridrashya",
      src: "/WorkCards/trid.png",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 py-5">
      <div className="w-full max-w-[1400px] mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Our Work
        </h2>
        <FocusCards cards={cards} />
      </div>
    </div>
  );
}
