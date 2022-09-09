import {shield, allow, deny, rule} from '../../../lib'
import {Context} from '../context';

const isAuthenticated = rule<Context>()(async (ctx) => {
  return ctx.user !== null
})

export const permissions = shield({
  query: {
    'user.findMany': deny,
    '*.findFirst': deny,
    'post.*': deny,
  },
  mutation: {
    '*': deny,
    'user.createOne':isAuthenticated,
  },
})
