import { z } from 'zod'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { PostUpdateManyWithoutAuthorNestedInputObjectSchema } from './PostUpdateManyWithoutAuthorNestedInput.schema'

import type { Prisma } from '@prisma/client'

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
