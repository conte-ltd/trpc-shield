import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import '../enums'
import './index'
export const NestedDateTimeFilterObjectSchemaBase = z
  .object({
    equals: z.date().optional(),
    in: z.date().array().optional(),
    notIn: z.date().array().optional(),
    lt: z.date().optional(),
    lte: z.date().optional(),
    gt: z.date().optional(),
    gte: z.date().optional(),
    not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)]).optional(),
  })
  .strict()
export const NestedDateTimeFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeFilter> = NestedDateTimeFilterObjectSchemaBase
