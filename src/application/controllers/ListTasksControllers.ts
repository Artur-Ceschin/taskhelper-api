import { IRequest, IResponse } from '../interfaces/IController'

export class ListTasksController {
  async handle(request: IRequest): Promise<IResponse> {
    return {
      statusCode: 200,
      body: {
        tasks: [{ id: '1', name: 'Artur' }],
      },
    }
  }
}
