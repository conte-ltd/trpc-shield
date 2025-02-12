import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import '../enums'
import {
  DateTimeFieldUpdateOperationsInputObjectSchema,
  NullableStringFieldUpdateOperationsInputObjectSchema,
  StringFieldUpdateOperationsInputObjectSchema,
} from './index'
export const UserUpdateWithoutPostsInputObjectSchemaBase = z
  .object({
    createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    username: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  })
  .strict()
export const UserUpdateWithoutPostsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutPostsInput> =
  UserUpdateWithoutPostsInputObjectSchemaBase
