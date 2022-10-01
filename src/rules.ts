import { IRuleFunction, IRule, IRuleConstructorOptions, ILogicRule, ShieldRule, IRuleResult, IOptions } from './types'

export class Rule<TContext extends Record<string, any>> implements IRule<TContext> {
  readonly name: string

  private func: IRuleFunction<TContext>

  constructor(name: string, func: IRuleFunction<TContext>, constructorOptions: IRuleConstructorOptions) {
    const options = { ...constructorOptions }
    this.name = name
    this.func = func
  }

  async resolve(ctx: TContext, type: string, path: string, rawInput: unknown, options: IOptions<TContext>): Promise<IRuleResult> {
    try {
      /* Resolve */
      const res = await this.executeRule(ctx, type, path, rawInput, options)

      if (res instanceof Error) {
        return res
      } else if (typeof res === 'string') {
        return new Error(res)
      } else if (res === true) {
        return true
      } else {
        return false
      }
    } catch (err) {
      if (options.debug) {
        throw err
      } else {
        return false
      }
    }
  }

  /**
   *
   * Compares a given rule with the current one
   * and checks whether their functions are equal.
   *
   */
  equals(rule: Rule<TContext>): boolean {
    return this.func === rule.func
  }

  private executeRule<TContext extends Record<string, any>>(
    ctx: TContext,
    type: string,
    path: string,
    rawInput: unknown,
    options: IOptions<TContext>,
  ): string | boolean | Error | Promise<IRuleResult> {
    // @ts-ignore
    return this.func(ctx, type, path, rawInput, options)
  }
}

export class LogicRule<TContext extends Record<string, any>> implements ILogicRule<TContext> {
  private rules: ShieldRule<TContext>[]

  constructor(rules: ShieldRule<TContext>[]) {
    this.rules = rules
  }

  /**
   * By default logic rule resolves to false.
   */
  async resolve(
    ctx: { [name: string]: any },
    type: string,
    path: string,
    rawInput: unknown,
    options: IOptions<TContext>,
  ): Promise<IRuleResult> {
    return false
  }

  /**
   * Evaluates all the rules.
   */
  async evaluate(
    ctx: TContext,
    type: string,
    path: string,
    rawInput: unknown,
    options: IOptions<TContext>,
  ): Promise<IRuleResult[]> {
    const rules = this.getRules()
    const tasks = rules.map((rule) => rule.resolve(ctx, type, path, rawInput, options))

    return Promise.all(tasks)
  }

  /**
   * Returns rules in a logic rule.
   */
  getRules() {
    return this.rules
  }
}

// Extended Types

export class RuleOr<TContext extends Record<string, any>> extends LogicRule<TContext> {
  constructor(rules: ShieldRule<TContext>[]) {
    super(rules)
  }

  /**
   * Makes sure that at least one of them has evaluated to true.
   */
  async resolve(ctx: TContext, type: string, path: string, rawInput: unknown, options: IOptions<TContext>): Promise<IRuleResult> {
    const result = await this.evaluate(ctx, type, path, rawInput, options)

    if (result.every((res) => res !== true)) {
      const customError = result.find((res) => res instanceof Error)
      return customError || false
    } else {
      return true
    }
  }
}

export class RuleAnd<TContext extends Record<string, any>> extends LogicRule<TContext> {
  constructor(rules: ShieldRule<TContext>[]) {
    super(rules)
  }

  /**
   * Makes sure that all of them have resolved to true.
   */
  async resolve(ctx: TContext, type: string, path: string, rawInput: unknown, options: IOptions<TContext>): Promise<IRuleResult> {
    const result = await this.evaluate(ctx, type, path, rawInput, options)

    if (result.some((res) => res !== true)) {
      const customError = result.find((res) => res instanceof Error)
      return customError || false
    } else {
      return true
    }
  }
}

export class RuleChain<TContext extends Record<string, any>> extends LogicRule<TContext> {
  constructor(rules: ShieldRule<TContext>[]) {
    super(rules)
  }

  /**
   * Makes sure that all of them have resolved to true.
   */
  async resolve(ctx: TContext, type: string, path: string, rawInput: unknown, options: IOptions<TContext>): Promise<IRuleResult> {
    const result = await this.evaluate(ctx, type, path, rawInput, options)

    if (result.some((res) => res !== true)) {
      const customError = result.find((res) => res instanceof Error)
      return customError || false
    } else {
      return true
    }
  }

  /**
   * Evaluates all the rules.
   */
  async evaluate(
    ctx: TContext,
    type: string,
    path: string,
    rawInput: unknown,
    options: IOptions<TContext>,
  ): Promise<IRuleResult[]> {
    const rules = this.getRules()

    return iterate(rules)

    async function iterate([rule, ...otherRules]: ShieldRule<TContext>[]): Promise<IRuleResult[]> {
      if (rule === undefined) return []
      return rule.resolve(ctx, type, path, rawInput, options).then((res) => {
        if (res !== true) {
          return [res]
        } else {
          return iterate(otherRules).then((ress) => ress.concat(res))
        }
      })
    }
  }
}

export class RuleRace<TContext extends Record<string, any>> extends LogicRule<TContext> {
  constructor(rules: ShieldRule<TContext>[]) {
    super(rules)
  }

  /**
   * Makes sure that at least one of them resolved to true.
   */
  async resolve(ctx: TContext, type: string, path: string, rawInput: unknown, options: IOptions<TContext>): Promise<IRuleResult> {
    const result = await this.evaluate(ctx, type, path, rawInput, options)

    if (result.some((res) => res === true)) {
      return true
    } else {
      const customError = result.find((res) => res instanceof Error)
      return customError || false
    }
  }

  /**
   * Evaluates all the rules.
   */
  async evaluate(
    ctx: TContext,
    type: string,
    path: string,
    rawInput: unknown,
    options: IOptions<TContext>,
  ): Promise<IRuleResult[]> {
    const rules = this.getRules()

    return iterate(rules)

    async function iterate([rule, ...otherRules]: ShieldRule<TContext>[]): Promise<IRuleResult[]> {
      if (rule === undefined) return []
      return rule.resolve(ctx, type, path, rawInput, options).then((res) => {
        if (res === true) {
          return [res]
        } else {
          return iterate(otherRules).then((ress) => ress.concat(res))
        }
      })
    }
  }
}

export class RuleNot<TContext extends Record<string, any>> extends LogicRule<TContext> {
  error?: Error

  constructor(rule: ShieldRule<TContext>, error?: Error) {
    super([rule])
    this.error = error
  }

  /**
   *
   * Negates the result.
   *
   */
  async resolve(ctx: TContext, type: string, path: string, rawInput: unknown, options: IOptions<TContext>): Promise<IRuleResult> {
    const [res] = await this.evaluate(ctx, type, path, rawInput, options)

    if (res instanceof Error) {
      return true
    } else if (res !== true) {
      return true
    } else {
      if (this.error) return this.error
      return false
    }
  }
}

export class RuleTrue<TContext extends Record<string, any>> extends LogicRule<TContext> {
  constructor() {
    super([])
  }

  /**
   *
   * Always true.
   *
   */
  async resolve(): Promise<IRuleResult> {
    return true
  }
}

export class RuleFalse<TContext extends Record<string, any>> extends LogicRule<TContext> {
  constructor() {
    super([])
  }

  /**
   *
   * Always false.
   *
   */
  async resolve(): Promise<IRuleResult> {
    return false
  }
}
