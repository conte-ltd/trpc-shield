import { z } from 'zod'
import { PostScalarFieldEnumSchema } from './enums'
import {
  PostWhereInputObjectSchema,
  PostOrderByWithRelationInputObjectSchema,
  PostWhereUniqueInputObjectSchema,
  PostSelectObjectSchema,
  PostIncludeObjectSchema,
} from './objects'

export const FindFirstPostSchema = z
  .object({
    where: z.lazy(() => PostWhereInputObjectSchema).optional(),
    orderBy: z
      .union([
        z.lazy(() => PostOrderByWithRelationInputObjectSchema).array(),
        z.lazy(() => PostOrderByWithRelationInputObjectSchema),
      ])
      .optional(),
    cursor: z.lazy(() => PostWhereUniqueInputObjectSchema).optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: PostScalarFieldEnumSchema.array().optional(),
    select: z.lazy(() => PostSelectObjectSchema).optional(),
    include: z.lazy(() => PostIncludeObjectSchema).optional(),
  })
  .strict()
