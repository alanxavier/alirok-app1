import env from '../../../config/env'
import { Controller } from '../../../../contracts'
import { GetTimestampController } from '../../../../app/controllers/timestamp/GetTimestampController'

export const makeGetTimestampController = (): Controller => {
  return new GetTimestampController(env.APP_NAME)
}
