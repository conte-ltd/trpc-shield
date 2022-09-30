import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import '../enums'
import {
  IntFieldUpdateOperationsInputObjectSchema,
  DateTimeFieldUpdateOperationsInputObjectSchema,
  NullableStringFieldUpdateOperationsInputObjectSchema,
  StringFieldUpdateOperationsInputObjectSchema,
} from './index'
export const UserUncheckedUpdateManyInputObjectSchemaBase = z
  .object({
    id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    username: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  })
  .strict()
export const UserUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> =
  UserUncheckedUpdateManyInputObjectSchemaBase
