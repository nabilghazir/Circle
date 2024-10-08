import { PostEntity } from "./post-entity";
import { RoleEnum } from "./role-entity";

export interface UserEntity {
    id: number;
    email?: string;
    password: string;
    fullname: string;
    username?: string;
    image: string;
    background: string;
    bio?: string;
    following: number;
    followers: number;
    role: RoleEnum;
    createdAt: Date;
    updatedAt: Date;
    post: PostEntity[];
}