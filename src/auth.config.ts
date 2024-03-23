import type {NextAuthConfig} from 'next-auth'
import {routes} from '@/utils/routes'

export const authConfig = {
  pages: {
    signIn: routes.admin,
  },
  callbacks: {
    authorized({auth, request: {nextUrl}}) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith(routes.dashboard)
      if (isOnDashboard) {
        return isLoggedIn;
         // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL(routes.dashboard, nextUrl))
      }
      return true
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig