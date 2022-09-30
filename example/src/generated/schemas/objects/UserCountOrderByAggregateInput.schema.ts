import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import { SortOrderSchema } from '../enums'
import './index'
export const UserCountOrderByAggregateInputObjectSchemaBase = z
  .object({
    id: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    username: SortOrderSchema.optional(),
    email: SortOrderSchema.optional(),
  })
  .strict()
export const UserCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> =
  UserCountOrderByAggregateInputObjectSchemaBase
