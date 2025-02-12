import { FocusCards } from "@/Components/ui/focus-cards";

export function Focuscards() {
  const cards = [
    {
      title: "Coffee Cup India",
      images: [
        "/WorkCards/cci.png",
        "/WorkCards/cci.png",
        "/WorkCards/cci.png",
      ],
    },
    {
      title: "Icon Bags",
      images: [
        "/WorkCards/icon1.jpg",
        "/WorkCards/icon2.jpg",
        "/WorkCards/icon3.jpg",
        "/WorkCards/icon4.jpg",
      ],
    },
    {
      title: "HRMD",
      images: [
        "/WorkCards/hermod1.png",
        "/WorkCards/hermod2.png",
        "/WorkCards/hermod3.png",
        "/WorkCards/hermod4.png",
      ],
    },
    {
      title: "Hindustan Unilever",
      images: [
        "/WorkCards/hul.jpg",
        "/WorkCards/hul1.jpg",
        "/WorkCards/hul2.jpg",
      ],
    },
    {
      title: "HAZELCOP",
      images: [
        "/WorkCards/hazel0.png",
        "/WorkCards/hazel4.webp",
        "/WorkCards/hazel2.webp",
        "/WorkCards/hazel3.webp",
        "/WorkCards/hazel1.webp",
      ],
    },
    {
      title: "Indie Grow",
      images: ["/WorkCards/ig.png", "/WorkCards/ig.png"],
    },
    {
      title: "MYFITNESS",
      images: ["/WorkCards/mf.png", "/WorkCards/mf.png"],
    },
    {
      title: "National Institute of Fashion Technology",
      images: ["/WorkCards/nift.jpg", "/WorkCards/nift.jpg"],
    },
    {
      title: "nuts & jars",
      images: ["/WorkCards/nutsnjar.jpg", "/WorkCards/nutsnjar.jpg"],
    },
    {
      title: "S Creation Films",
      images: ["/WorkCards/sf.png", "/WorkCards/sf.png"],
    },
    {
      title: "Tridrashya",
      images: ["/WorkCards/trid.png", "/WorkCards/trid.png"],
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100">
      <div className="w-full max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4 lg:text-4xl">
          Proudly Presented
        </h2>
        <FocusCards cards={cards} />
      </div>
    </div>
  );
}
