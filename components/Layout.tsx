import Main from "./Main";
import Box from "./Box";

import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <Main>
            <Box>{children}</Box>
        </Main>
    );
}
