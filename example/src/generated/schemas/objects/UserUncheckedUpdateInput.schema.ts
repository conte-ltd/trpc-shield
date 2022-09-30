import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import '../enums'
import {
  IntFieldUpdateOperationsInputObjectSchema,
  DateTimeFieldUpdateOperationsInputObjectSchema,
  NullableStringFieldUpdateOperationsInputObjectSchema,
  StringFieldUpdateOperationsInputObjectSchema,
  PostUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema,
} from './index'
export const UserUncheckedUpdateInputObjectSchemaBase = z
  .object({
    id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    username: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    posts: z.lazy(() => PostUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
  })
  .strict()
export const UserUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> =
  UserUncheckedUpdateInputObjectSchemaBase
