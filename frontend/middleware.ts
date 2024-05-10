import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/home", "/boarding", "/profile"];
const adminRoutes = ["/admin"];
const publicRoutes = ["/login", "/signup", "/"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const isAdminRoute = adminRoutes.includes(path);

  const cookie = cookies().get("token")?.value;
  let isAuthenticated = false;
  let isAdmin = false;

  if (cookie) {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/auth/check-auth",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie}`,
          },
        }
      );
      const data = await response.json();
      isAuthenticated = data?.success === true ? true : false;
      isAdmin = data?.is_admin === true ? true : false;
    } catch (error) {}
  }
  if (isAdminRoute && !isAdmin) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  if (isProtectedRoute && !isAuthenticated) {
    const response = NextResponse.redirect(new URL("/login", req.nextUrl));
    response.cookies.delete("token");
    return response;
  }
  if (
    isPublicRoute &&
    isAuthenticated &&
    !req.nextUrl.pathname.startsWith("/home")
  ) {
    return NextResponse.redirect(new URL("/home", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
