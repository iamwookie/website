import Footer from "./Footer";

import type { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
    return (
        <main className="grid min-h-screen place-items-center text-white font-nunito">
            {children}

            <Footer />
        </main>
    );
}
