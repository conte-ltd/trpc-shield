import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import '../enums'
import { NestedIntFilterObjectSchema, NestedFloatFilterObjectSchema } from './index'
export const NestedIntWithAggregatesFilterObjectSchemaBase = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
    _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  })
  .strict()
export const NestedIntWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> =
  NestedIntWithAggregatesFilterObjectSchemaBase
