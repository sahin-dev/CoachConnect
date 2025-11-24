import { UserRole } from "generated/prisma"

export type TokenPayload = {
    id:string
    role:UserRole,
    email:string
    email_verified:boolean
}