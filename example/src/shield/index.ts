import { shield, deny, rule } from '../../../lib'
import { Context } from '../context'

const isAuthenticated = rule<Context>()(async (ctx) => {
  return ctx.user !== null
})

export const permissions = shield<Context>({
  query: {
    'user.findMany': deny,
    '*.findFirst': deny,
    'post.*': deny,
  },
  mutation: {
    '*': deny,
    'user.createOne': isAuthenticated,
  },
})
