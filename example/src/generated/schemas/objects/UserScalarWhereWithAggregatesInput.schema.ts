import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import '../enums'
import {
  IntWithAggregatesFilterObjectSchema,
  DateTimeWithAggregatesFilterObjectSchema,
  StringNullableWithAggregatesFilterObjectSchema,
  StringWithAggregatesFilterObjectSchema,
} from './index'
export const UserScalarWhereWithAggregatesInputObjectSchemaBase = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
    username: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  })
  .strict()
export const UserScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> =
  UserScalarWhereWithAggregatesInputObjectSchemaBase
