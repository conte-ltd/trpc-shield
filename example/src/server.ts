import * as trpcExpress from '@trpc/server/adapters/express'
import express from 'express'
import { expressHandler } from 'trpc-playground/handlers/express'
import { appRouter } from './generated/routers'
import { createContext } from './context'

const PORT = 3001

const runApp = async () => {
  const app = express()

  const trpcApiEndpoint = '/api/trpc'
  const playgroundEndpoint = '/api/trpc-playground'

  app.use(
    trpcApiEndpoint,
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  )

  // app.use(
  //   playgroundEndpoint,
  //   await expressHandler({
  //     trpcApiEndpoint,
  //     playgroundEndpoint,
  //     router: appRouter,
  //     // uncomment this if you're using superjson
  //     // request: {
  //     //   superjson: true,
  //     // },
  //   }),
  // )

  app.get('/', (req, res) => res.send('Express + Prisma + tRPC + tRPC Shield'))

  app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
  })
}

runApp()
