import { z } from 'zod'
import { UserScalarFieldEnumSchema } from './enums'
import {
  UserWhereInputObjectSchema,
  UserOrderByWithRelationInputObjectSchema,
  UserWhereUniqueInputObjectSchema,
  UserSelectObjectSchema,
  UserIncludeObjectSchema,
} from './objects'

export const FindManyUserSchema = z
  .object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    orderBy: z
      .union([
        z.lazy(() => UserOrderByWithRelationInputObjectSchema).array(),
        z.lazy(() => UserOrderByWithRelationInputObjectSchema),
      ])
      .optional(),
    cursor: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: UserScalarFieldEnumSchema.array().optional(),
    select: z.lazy(() => UserSelectObjectSchema).optional(),
    include: z.lazy(() => UserIncludeObjectSchema).optional(),
  })
  .strict()
