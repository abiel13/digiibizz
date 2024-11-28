import * as zod from 'zod'

export const AuthValidator = zod.object({
    email:zod.string().email(),
    password:zod.string().min(8, {
        message:'password must be at least 8 characters'
    })
})