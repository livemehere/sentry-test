import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/ourfield"}>OurField</Link>
      </nav>
      {children}
    </div>
  );
}
