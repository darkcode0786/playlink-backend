import { IUserRepository } from "./user.repository.interface";

export class UserService {
    constructor(private readonly userRepo: IUserRepository) { }
    async getProfile(userId: string) {
        return this.userRepo.findById(userId);
    }
}
