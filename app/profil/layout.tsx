import { ReactNode } from "react";
import ManagerTemplate from "@/components/managerTemplate";

export default function ProfilLayout({ children }: { children: ReactNode }) {
  return <ManagerTemplate>{children}</ManagerTemplate>;
}
