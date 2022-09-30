import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import '../enums'
import { PostCreateNestedManyWithoutAuthorInputObjectSchema } from './index'
export const UserCreateInputObjectSchemaBase = z
  .object({
    createdAt: z.date().optional(),
    username: z.string().optional().nullable(),
    email: z.string(),
    posts: z.lazy(() => PostCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  })
  .strict()
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = UserCreateInputObjectSchemaBase
