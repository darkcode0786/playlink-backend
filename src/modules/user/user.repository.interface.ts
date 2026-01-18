import { IUser, UserDocument } from "./user.model";

 

export interface IUserRepository {
  create(user: IUser): Promise<UserDocument>;
  findById(id: string): Promise<UserDocument | null>;
  findByUsername(username: string): Promise<UserDocument | null>;
  existsByUsername(username: string): Promise<boolean>;
}
