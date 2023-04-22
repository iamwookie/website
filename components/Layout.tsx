import { ReactNode } from "react";
import Main from "./Main";
import Box from "./Box";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Main>
                <Box>{children}</Box>
            </Main>
        </>
    );
}
