import { connectDB } from '../../utils/db';
import User from '../../models/User';
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export async function POST(req) {
  await connectDB();

  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  try {
    const user = await User.findOne({ username: session.user.username });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch user", { status: 500 });
  }
}
