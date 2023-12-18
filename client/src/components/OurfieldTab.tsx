import Link from "next/link";

export const OurfieldTab = () => {
  return (
    <nav>
      <Link href={"/ourfield/social-ground"}>Social-Ground</Link>
      <Link href={"/ourfield/social-league"}>Social-League</Link>
    </nav>
  );
};
