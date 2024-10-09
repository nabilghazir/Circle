import { UserEntity } from "../../../entities/user-entity";

export type LoginRequestDTO = Pick<
    UserEntity,
    "email" | "password" | "username">;

export type LoginResponseDTO = {
    User: Omit<UserEntity, "password">
    token: string;
}