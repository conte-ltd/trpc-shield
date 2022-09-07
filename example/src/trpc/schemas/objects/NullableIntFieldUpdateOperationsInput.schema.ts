import { z } from 'zod'

import type { Prisma } from '@prisma/client'

export const NullableIntFieldUpdateOperationsInputObjectSchemaBase = z
  .object({
    set: z.number().optional().nullable(),
    increment: z.number().optional(),
    decrement: z.number().optional(),
    multiply: z.number().optional(),
    divide: z.number().optional(),
  })
  .strict()

export const NullableIntFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> =
  NullableIntFieldUpdateOperationsInputObjectSchemaBase
