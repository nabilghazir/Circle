import { string, z } from "zod"

export const UpdateUserSchema = z.object({
    fullname: string(),
    username: string(),
    bio: string()
})

export type UpdateUserFormInput = z.infer<typeof UpdateUserSchema>