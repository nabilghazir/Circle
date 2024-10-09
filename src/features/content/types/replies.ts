import { RepliesEntity } from "../../../entities/replies-entity";

export type RepliesDTO = RepliesEntity

export type CreateRepliesDTO = Pick<
    RepliesEntity
    , "content" | "image">;