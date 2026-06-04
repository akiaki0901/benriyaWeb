import { NextResponse } from "next/server";

export const config = {
    matcher: ["/:path*"],
};

export function middleware(request) {
    const auth = request.headers.get("authorization");

    const username = process.env.BASIC_AUTH_USER;
    const password = process.env.BASIC_AUTH_PASSWORD;

    const valid =
        auth ===
        "Basic " +
            Buffer.from(`${username}:${password}`).toString("base64");

    if (!valid) {
        return new Response("Authentication required", {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="Secure Area"',
            },
        });
    }

    return NextResponse.next();
}