import { RepliesEntity } from "./replies-entity";
import { UserEntity } from "./user-entity";

export interface PostEntity {
    id: number;
    content?: string;
    image?: string;
    likesCount?: number;
    repliesCount?: number;
    timeAgo?: string;
    createdAt: Date;
    updateAt: Date;
    author: Omit<UserEntity, "password">;
    Replies: RepliesEntity[]
}

export interface CreatePostEntity {
    id: number,
    content?: string,
    image?: FileList,
    likesCount?: number,
    repliesCount?: number,
    createdAt: string,
    updateAt: Date,
    author: Omit<UserEntity, "password">,
    Replies: RepliesEntity[]
}