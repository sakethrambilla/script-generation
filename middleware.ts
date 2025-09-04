import { withAuth } from "next-auth/middleware";

const publicRoutes = ["/api/auth/:path*", "api/public/:path*"];

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      // console.log("Token", token);
      const sessionToken = req.cookies.get("next-auth.session-token");
      const secureSessionToken = req.cookies.get(
        "__Secure-next-auth.session-token"
      );
      // console.log("Session Token", sessionToken);

      const isAuthenticated = !!(sessionToken || secureSessionToken);

      // Always require auth for dashboard routes
      if (req.nextUrl.pathname.startsWith("/dashboard")) {
        return isAuthenticated;
      }

      if (
        publicRoutes.some((route) => req.nextUrl.pathname.startsWith(route))
      ) {
        return true;
      }

      // For API routes, only require auth for non-GET requests
      if (req.nextUrl.pathname.startsWith("/api")) {
        return req.method === "GET" ? true : isAuthenticated;
      }

      return true; // Allow access to other routes
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/api/image/:path*", "/api/post/:path*"],
};
