import { z } from 'zod'

import type { Prisma } from '@prisma/client'

export const UserUncheckedCreateWithoutPostsInputObjectSchemaBase = z
  .object({
    id: z.number().optional(),
    createdAt: z.date().optional(),
    username: z.string().optional().nullable(),
    email: z.string(),
  })
  .strict()

export const UserUncheckedCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPostsInput> =
  UserUncheckedCreateWithoutPostsInputObjectSchemaBase
