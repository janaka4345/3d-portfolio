import { z } from "zod"

export const formSchema = z.object({
    name: z
        .string()
        .min(1, { message: "name is required" })
        .max(50, { message: "name is too long. only 50 characters" }),
    email: z.string().min(1, { message: "email is required" }).email({
        message: "Invalid email address",
    }),
    message: z
        .string()
        .min(1, { message: "message is required" })
        .max(250, { message: "message is too long.only 250 characters" }),
})
