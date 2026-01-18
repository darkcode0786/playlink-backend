
import { IUser, User } from "./user.model";
import { IUserRepository } from "./user.repository.interface";

export class UserRepository implements IUserRepository {
    async create(user: IUser): Promise<IUser> {
        return User.create(user);
    }

    async findById(id: string): Promise<IUser | null> {
        return User.findById(id).select("-password");
    }

    async findByUsername(username: string): Promise<IUser | null> {
        return User.findOne({ username });
    }

    async existsByUsername(username: string): Promise<boolean> {
        return (await User.countDocuments({ username })) > 0;
    }
}
