import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import '../enums'
import './index'
export const IntFieldUpdateOperationsInputObjectSchemaBase = z
  .object({
    set: z.number().optional(),
    increment: z.number().optional(),
    decrement: z.number().optional(),
    multiply: z.number().optional(),
    divide: z.number().optional(),
  })
  .strict()
export const IntFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
  IntFieldUpdateOperationsInputObjectSchemaBase
