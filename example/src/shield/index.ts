import { shield, allow, deny } from '../../../dist'

export const permissions = shield({
  query: {
    'user.findMany': deny,
    '*.findFirst': deny,
    'post.*': deny,
  },
  mutation: {
    '*': deny,
    'user.createOne': allow,
  },
})
