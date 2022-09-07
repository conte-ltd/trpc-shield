import * as trpc from '@trpc/server'
import { Context } from './context'
import { permissions } from './shield'

export const createRouter = () => {
  return trpc.router<Context>()
}

export const baseRouter = createRouter().middleware(permissions)
