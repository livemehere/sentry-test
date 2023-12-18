import { FC, ReactNode } from "react";
import { OurfieldTab } from "@/components/OurfieldTab";

interface Props {
  children: ReactNode;
}
export const OurFieldLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <OurfieldTab />
      {children}
    </div>
  );
};
