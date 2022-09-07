import { z } from 'zod'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { PostUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './PostUncheckedUpdateManyWithoutAuthorNestedInput.schema'

import type { Prisma } from '@prisma/client'

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
