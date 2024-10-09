import { z } from "zod";

export const RegisterSchema = z.object({
    fullname: z.string().min(5, "Atleast 5 characters required !!!"),
    email: z.string().email("Please write your email correctly !!!"),
    password: z.string().min(5, "Password must be atleast 5 Charracters!!!")
});

export type RegisterFormInput = z.infer<typeof RegisterSchema>