import { IRules, IOptions } from './types'

/**
 *
 * @param ruleTree
 * @param options
 *
 * Generates middleware from given rules.
 *
 */
export function generateMiddlewareFromRuleTree<TContext extends Record<string, unknown>>(
  ruleTree: IRules<TContext>,
  options: IOptions<TContext>,
) {
  return ({
    next,
    ctx,
    type,
    path,
    input,
    rawInput,
  }: {
    next: Function
    ctx: TContext
    type: string
    path: string
    input: { [name: string]: any }
    rawInput: unknown
  }) => {
    const opWithPath: Array<string> = path.split('.')

    let rule
    if (opWithPath.length > 1) {
      const opNames = opWithPath.reduce<string[]>((prev, current, index) => {
        if (index === 0) {
          return [current, `${current}.*`]
        } else if (index === opWithPath.length - 1) {
          const [prevHead, ...prevTail] = prev
          return [`${prevHead}.${current}`, ...prevTail, `*.${current}`]
        } else {
          const [prevHead, ...prevTail] = prev
          return [`${prevHead}.${current}`, ...prevTail, `*.${current}.*`]
        }
      }, [])

      opNames.push('*')

      for (const opName of opNames) {
        rule = ruleTree?.[type]?.[opName]

        if (rule !== undefined) {
          break
        }
      }
    } else {
      const opName: string = opWithPath[0]
      rule = ruleTree?.[type]?.[opName]
    }

    if (rule) {
      return rule.resolve(ctx, type, path, input, rawInput, options).then((result: any) => {
        if (!result) throw options.fallbackError
        return next()
      })
    }
    return next()
  }
}
