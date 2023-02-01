import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
    matcher: [
        "/",
        "/([^/.]*)", // Exclude /public files by matching all paths except for paths containing . (e.g. /logo.png)
    ],
};

export default (req: NextRequest, res: NextResponse) => {
    const url = req.nextUrl;
    const host = req.headers.get("host");
    const sub = host.split(".")[0];

    if (sub == "kat") url.pathname = `/kat${url.pathname}`;

    return NextResponse.rewrite(url);
};
