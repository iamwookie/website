import { ReactNode } from "react";
import Image from "next/image";
import Main from "./Main";
import Box from "./Box";

// background-image: url("/assets/bg.jpg");
// background-size: cover;
// background-position: center;

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="fixed h-full w-full overflow-hidden">
                <Image alt="Background Image" src={"/assets/bg.jpg"} fill priority sizes="100vw" className="object-cover" />
            </div>

            <Main>
                <Box>{children}</Box>
            </Main>
        </>
    );
}
