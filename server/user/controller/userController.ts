import { createUser, getUsers } from "@/server/user/services/userService";
import { NextResponse } from "next/server";
import { createUserDto } from "./dto/createUserDTO";

export async function GET() {
  try {
    const users = await getUsers();
    return NextResponse.json(users);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = createUserDto.parse(body);
    const user = await createUser(parsed);
    return NextResponse.json(user);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
