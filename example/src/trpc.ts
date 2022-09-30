import {initTRPC} from '@trpc/server'
import { Context } from './context'
import { permissions } from './shield'

export const t = initTRPC.context<Context>().create()
export const procedure = t.procedure.use(t.middleware(permissions))
