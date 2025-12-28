import { CreateUserDto } from "@/server/user/controller/dto/createUserDTO";
import { UserModel } from "@/server/user/entities/models/user/UserSchema";
import { connectMongo } from "@/server/_utils/connect";

export async function createUser(dto: CreateUserDto) {
  await connectMongo();
  return UserModel.create(dto);
}

export async function getUsers() {
  await connectMongo();
  return UserModel.find().lean();
}

export async function findUserByEmail(email: string) {
  await connectMongo();
  return UserModel.findOne({ email }).lean();
}
