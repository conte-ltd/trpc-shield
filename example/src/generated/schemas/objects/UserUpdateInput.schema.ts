import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import '../enums'
import {
  DateTimeFieldUpdateOperationsInputObjectSchema,
  NullableStringFieldUpdateOperationsInputObjectSchema,
  StringFieldUpdateOperationsInputObjectSchema,
  PostUpdateManyWithoutAuthorNestedInputObjectSchema,
} from './index'
export const UserUpdateInputObjectSchemaBase = z
  .object({
    createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    username: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    posts: z.lazy(() => PostUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
  })
  .strict()
export const UserUpdateInputObjectSchema: z.ZodType<Prisma.UserUpdateInput> = UserUpdateInputObjectSchemaBase
