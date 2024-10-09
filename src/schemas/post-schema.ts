import { z } from "zod";

export const PostSchema = z.object({
    content: z.string().min(5, "Atleast 5 characters required !!!"),
    image: z.instanceof(FileList).optional()
});

export type CreatePostFormInput = z.infer<typeof PostSchema>;