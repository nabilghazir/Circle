import { z } from "zod";

export const RepliesSchema = z.object({
    content: z.string().min(5, "At least 5 characters required !!!"),
    image: z.string().optional()
});

export type CreateRepliesFormInput = z.infer<typeof RepliesSchema>;