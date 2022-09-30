import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import '../enums'
import './index'
export const UserWhereUniqueInputObjectSchemaBase = z
  .object({
    id: z.number().optional(),
    username: z.string().optional(),
    email: z.string().optional(),
  })
  .strict()
export const UserWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserWhereUniqueInput> = UserWhereUniqueInputObjectSchemaBase
