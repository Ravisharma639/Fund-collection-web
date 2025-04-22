import { connectDB } from "@/utils/db";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]"; // adjust path

export async function POST(req) {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const body = await req.json();

  try {
    const updated = await User.findOneAndUpdate(
      { username: session.user.username },
      {
        $set: {
          name: body.name,
          profilepic: body.profilepic,
          coverpic: body.coverpic,
        },
      },
      { new: true }
    );
    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (err) {
    return new Response("Failed to update", { status: 500 });
  }
}
