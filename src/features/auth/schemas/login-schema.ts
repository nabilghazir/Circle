import { z } from "zod"

export const LoginSchema = z.object({
    username: z.string().min(5, "Atleast 5 characters required !!!").optional(),
    password: z.string().min(5, "Password must be atleast 5 Characters!!!")
})

export type LoginFormInput = z.infer<typeof LoginSchema>