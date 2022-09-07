import { z } from 'zod'

import type { Prisma } from '@prisma/client'

export const UserCreateWithoutPostsInputObjectSchemaBase = z
  .object({
    createdAt: z.date().optional(),
    username: z.string().optional().nullable(),
    email: z.string(),
  })
  .strict()

export const UserCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutPostsInput> =
  UserCreateWithoutPostsInputObjectSchemaBase
