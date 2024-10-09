import { UserEntity } from "../../../entities/user-entity";

export type UserDTO = UserEntity

export type UpdateUserDTO = Pick<
    UserEntity, "fullname" | "username" | "bio"
>;