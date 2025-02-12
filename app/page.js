import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <navbar>
        <div className="logo">
          <Image src="/globe.svg" alt="logo" width="50" height="50" />
        </div>
        <div className="links">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
        </div>
      </navbar>
    </>
  );
}
