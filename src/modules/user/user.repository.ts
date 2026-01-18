
import { IUser, User, UserDocument } from "./user.model";
import { IUserRepository } from "./user.repository.interface";

export class UserRepository implements IUserRepository {
    async create(user: IUser): Promise<UserDocument> {
        return User.create(user);
    }

    async findById(id: string): Promise<UserDocument | null> {
        return User.findById(id).select("-password");
    }

    async findByUsername(username: string): Promise<UserDocument | null> {
        return User.findOne({ username });
    }

    async existsByUsername(username: string): Promise<boolean> {
        return await User.exists({ username }) !== null;
    }

}
