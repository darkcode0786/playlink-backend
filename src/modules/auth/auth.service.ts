
import { comparePassword, hashPassword } from "../../utils/hash";
import { signToken } from "../../utils/jwt";
import { UserDocument } from "../user/user.model";
import { IUserRepository } from "../user/user.repository.interface";

export class AuthService {

  constructor(private userRepo: IUserRepository) { }

  async register(name: string, username: string, email: string, password: string) {
    const exists = await this.userRepo.existsByUsername(username);
    if (exists) throw new Error("User already exists");

    const hashed = await hashPassword(password)

    const user: UserDocument = await this.userRepo.create({
      username,
      name,
      email,
      password: hashed,
    });

    return this.generateToken(user);  
  }

  async login(username: string, password: string) {
    const user = await this.userRepo.findByUsername(username);
    if (!user) throw new Error("Invalid credentials");

    const match = await comparePassword(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    return this.generateToken(user); // same here
  }

  private generateToken(user: UserDocument) {
    return signToken({ id: user.id, username: user.username, email: user.email });
  }


}
