import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import { SortOrderSchema } from '../enums'
import { PostOrderByRelationAggregateInputObjectSchema } from './index'
export const UserOrderByWithRelationInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    username: SortOrderSchema.optional(),
    email: SortOrderSchema.optional(),
    posts: z.lazy(() => PostOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
  UserOrderByWithRelationInputObjectSchemaBase
