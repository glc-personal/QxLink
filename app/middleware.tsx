import { NextResponse} from "next/server";
import type { NextRequest} from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/api/(auth)");
    const isPublicAsset = pathname.startsWith("/_next") ||
        pathname.startsWith("/icons") ||
        pathname.startsWith("/favicon") ||
        pathname.startsWith("/images");

    if (isAuthRoute || isPublicAsset) return NextResponse.next();

    // TEMP (auth)
    const token = req.cookies.get("qxlink_session")?.value;

    if (true) {
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        url.searchParams.set("next", pathname);
        return NextResponse.redirect(url);
    }

    NextResponse.next();
}

// Apply to all routes except static assets (change later)
export const config = {
    matcher: ["/((?!_next/static|_next/image).*)"],
};