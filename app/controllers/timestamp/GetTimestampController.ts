import { Controller, ControllerContext, HttpResponse } from '../../../contracts'

export class GetTimestampController implements Controller {
  constructor (private readonly serviceName: string) { }

  async handle ({ response }: ControllerContext): Promise<HttpResponse> {
    const date = new Date()
    const timestamp = date.getTime()
    const service = this.serviceName

    return response.ok({ timestamp, service })
  }
}
