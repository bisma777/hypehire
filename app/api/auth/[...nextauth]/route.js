import axios from 'axios';
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'login',
      name: 'Login',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          const user = await axios.post(`${process.env.BACKEND_URL}/auth/v1/login`, {
            userName: credentials?.email,
            password: credentials?.password,
          })
          if (user) {
            const session = await axios.get(`${process.env.BACKEND_URL}/search/v1/session/start?tenant=${user.data.tenant}`, {
              headers: {
                userName: credentials?.email,
                refreshToken: user.data.refreshToken,
                subscriber: user.data.subscriber,
                Authorization: `Bearer ${user.data.accessToken}`
              }
            })
            if (session) {
              user.data['sessionId'] = session.data
              return user.data
            }
          }
          return null
        }
        catch (error) {
          const errorMessage = error.response.data.error
          throw new Error(errorMessage)
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, trigger, session, account, user }) {
      if (user) {
        token.user = user;
      }
      if (account) {
        token.accessToken = account.access_token
      }
      if (trigger === "update" && session?.sessionId) {
        token.user.sessionId = session.sessionId
      }
      return token
    },
    async session({ session, token, user }) {

      session.accessToken = token.accessToken
      session.user = token.user
      return session
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 60 * 60,
  },
  pages: {
    signIn: '/login',
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
