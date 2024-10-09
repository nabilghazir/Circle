import { PostEntity } from "./post-entity";
import { UserEntity } from "./user-entity";

export interface RepliesEntity {
    id: number;
    content?: string;
    image?: string;
    likesCount?: number;
    repliesCount?: number;
    createdAt: Date;
    updatedAt: Date;
    postID: number;
    post: PostEntity;
    author: Omit<UserEntity, "password">;
}