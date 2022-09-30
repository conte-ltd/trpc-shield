import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import { SortOrderSchema } from '../enums'
import './index'
export const UserMinOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    username: SortOrderSchema.optional(),
    email: SortOrderSchema.optional(),
  })
  .strict()
export const UserMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> =
  UserMinOrderByAggregateInputObjectSchemaBase
