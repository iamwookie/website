import { ReactNode } from "react";
import Image from "next/future/image";
import Main from "./Main";
import Box from "./Box";

// background-image: url("/assets/bg.jpg");
// background-size: cover;
// background-position: center;

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Image alt="Background Image" src={"/assets/bg.jpg"} fill={true} priority={true} />

            <Main>
                <Box>{children}</Box>
            </Main>
        </>
    );
}
