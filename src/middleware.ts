import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define route matchers for public and protected routes
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/dashboard']);
const isProtectedRoute = createRouteMatcher(['/home(.*)']);

export default clerkMiddleware(async (auth, req) => {
  // Protect routes that are not public
  if (!isPublicRoute(req) || isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};