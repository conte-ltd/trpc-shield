import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import { SortOrderSchema } from '../enums'
import './index'
export const UserMaxOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    username: SortOrderSchema.optional(),
    email: SortOrderSchema.optional(),
  })
  .strict()
export const UserMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> =
  UserMaxOrderByAggregateInputObjectSchemaBase
