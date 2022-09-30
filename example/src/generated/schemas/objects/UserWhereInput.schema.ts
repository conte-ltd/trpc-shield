import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import '../enums'
import {
  IntFilterObjectSchema,
  DateTimeFilterObjectSchema,
  StringNullableFilterObjectSchema,
  StringFilterObjectSchema,
  PostListRelationFilterObjectSchema,
} from './index'
export const UserWhereInputObjectSchemaBase = z
  .object({
    AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    username: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    posts: z.lazy(() => PostListRelationFilterObjectSchema).optional(),
  })
  .strict()
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = UserWhereInputObjectSchemaBase
