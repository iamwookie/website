import type { ReactNode } from "react";

export default function Box({ children }: { children: ReactNode }) {
    return <div className="backdrop-blur-xl p-5 rounded-lg text-center text-white font-nunito animate__animated animate__fadeIn">{children}</div>
}