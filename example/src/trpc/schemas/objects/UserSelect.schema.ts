import { z } from 'zod'
import { PostFindManySchema } from '../findManyPost.schema'
import type { Prisma } from '@prisma/client'

export const UserSelectObjectSchemaBase = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  username: z.boolean().optional(),
  email: z.boolean().optional(),
  posts: z.union([z.lazy(() => PostFindManySchema), z.boolean()]).optional(),
})

export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = UserSelectObjectSchemaBase
