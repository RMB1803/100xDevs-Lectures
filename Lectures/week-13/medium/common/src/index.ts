import z from 'zod'

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().optional()
})

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
})

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})

export type SignupInput = z.infer<typeof signupInput> // type inference in zod
export type SigninInput = z.infer<typeof signinInput> // type inference in zod
export type CreateBlogInput = z.infer<typeof createBlogInput> // type inference in zod
export type UpdateBlogInput = z.infer<typeof updateBlogInput> // type inference in zod

