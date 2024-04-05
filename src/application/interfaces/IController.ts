export interface IRequest {
  body: Record<string, unknown>
  params: Record<string, string>
  accountId: string | undefined
}

export interface IResponse {
  statusCode: number
  body: Record<string, any> | null
}

export interface IController {
  handle(request: IRequest): Promise<IResponse>
}
