import { ReactNode } from "react";

import Footer from "./Footer";

export default function Main({ children }: { children: ReactNode }) {
    return (
        <main className="grid min-h-screen place-items-center text-white font-nunito">
            {children}

            <Footer />
        </main>
    );
}
