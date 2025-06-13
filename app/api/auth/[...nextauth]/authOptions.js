import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import connectDB from "@/db/connectDb";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      await connectDB();

      if (!user.email) {
        console.error("User email not available");
        return false;
      }

      let existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        existingUser = await User.create({
          email: user.email,
          username: user.email.split("@")[0],
        });
      }

      return true;
    },

    async session({ session }) {
      if (!session.user.email) return session;

      const dbUser = await User.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.name = dbUser.username;

        if (dbUser.razorpaysecret) {
          session.user.razorpaysecret = dbUser.razorpaysecret;
        }
      }

      return session;
    },
  },
};
