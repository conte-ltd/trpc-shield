import { validateRuleTree, ValidationError } from './validation'
import { generateMiddlewareFromRuleTree } from './generator'
import { allow } from './constructors'
import { withDefault } from './utils'
import type { IFallbackErrorType, IOptions, IOptionsConstructor, IRules, ShieldRule } from './types'
import type { MiddlewareFunction, ProcedureParams, CombinedDataTransformer, DefaultErrorShape } from '@trpc/server'
import type { RootConfig } from '@trpc/server/src/core/internals/config'

/**
 *
 * @param options
 *
 * Makes sure all of defined rules are in accord with the options
 * shield can process.
 *
 */
function normalizeOptions<TContext extends Record<string, any>>(options: IOptionsConstructor<TContext>): IOptions<TContext> {
  if (typeof options.fallbackError === 'string') {
    options.fallbackError = new Error(options.fallbackError)
  }

  return {
    debug: options.debug !== undefined ? options.debug : false,
    allowExternalErrors: withDefault(false)(options.allowExternalErrors),
    fallbackRule: withDefault<ShieldRule<TContext>>(allow)(options.fallbackRule),
    fallbackError: withDefault<IFallbackErrorType<TContext>>(new Error('Not Authorised!'))(options.fallbackError),
  }
}

/**
 *
 * @param ruleTree
 * @param options
 *
 * Validates rules and generates middleware from defined rule tree.
 *
 */
export function shield<
  TContext extends Record<string, any>,
  TConfig extends RootConfig = {
    transformer: CombinedDataTransformer
    errorShape: DefaultErrorShape
    ctx: TContext
    meta: Record<string, unknown>
  },
  TContextIn = TContext,
  TContextOut = TContext,
  TInputIn = unknown,
  TInputOut = unknown,
  TOutputIn = unknown,
  TOutputOut = unknown,
  TMeta = unknown,
>(
  ruleTree: IRules<TContext>,
  options: IOptionsConstructor<TContext> = {},
): MiddlewareFunction<
  ProcedureParams<TConfig, TContextIn, TContextOut, TInputIn, TInputOut, TOutputIn, TOutputOut, TMeta>,
  ProcedureParams<TConfig, TContextIn, TContextOut, TInputIn, TInputOut, TOutputIn, TOutputOut, TMeta>
> {
  const normalizedOptions = normalizeOptions(options)
  const ruleTreeValidity = validateRuleTree(ruleTree)

  if (ruleTreeValidity.status === 'ok') {
    return generateMiddlewareFromRuleTree(ruleTree, normalizedOptions) as any
  } else {
    throw new ValidationError(ruleTreeValidity.message)
  }
}
