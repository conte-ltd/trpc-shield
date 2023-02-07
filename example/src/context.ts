import * as trpc from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({
  prisma,
  // user: {
  //   name: 'example'
  // },
  user: null,
}) // no context

export type Context = trpc.inferAsyncReturnType<typeof createContext>
