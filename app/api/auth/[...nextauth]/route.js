import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/User";
import connectDB from "@/db/connectDb";

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        await connectDB();

        if (!user.email) {
          console.error("GitHub account does not provide an email.");
          return false;
        }

        let existingUser = await User.findOne({ email: user.email });

        // Create user if not found
        if (!existingUser) {
          existingUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
        }

        return true;
      }
      return false;
    },

    async session({ session }) {
      if (!session.user.email) return session;

      const dbUser = await User.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.name = dbUser.username;

        // ✅ Include razorpay secret if available
        if (dbUser.razorpaysecret) {
          session.user.razorpaysecret = dbUser.razorpaysecret;
        }
      }

      return session;
    },
  },
});

export { authoptions as GET, authoptions as POST };
