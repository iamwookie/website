import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
    return <main className="grid min-h-screen place-items-center">{children}</main>;
}
