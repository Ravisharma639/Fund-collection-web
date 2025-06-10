import connectDB from '../../../db/connectDb';
import User from "@/models/User";

export async function POST(req) {
  await connectDB();
  const body = await req.json();

  try {
    const user = await User.findOneAndUpdate(
      { username: body.username },
      { profilepic: body.profilepic },
      { new: true }
    );
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Profile update failed", { status: 500 });
  }
}
