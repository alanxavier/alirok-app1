import { Router } from 'express'
import { adaptRoute } from '../adapters/ExpressRouteAdapter'
import { makeGetTimestampController } from '../factories/controllers/timestamp'

export default (router: Router): void => {
  router.get('/', adaptRoute(makeGetTimestampController()))
}
