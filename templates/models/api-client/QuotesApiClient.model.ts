import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client'
import { {{ Name }}sApiClientConfigInterface } from './{{ Name }}sApiClientConfig.interface'
import { {{ Name }}sApiClientInterface } from './{{ Name }}sApiClient.interface'
import { {{ Name }}Interface } from '../{{ Name }}.interface'

/**
 * @Name {{ Name }}sApiClientModel
 * @description
 * Implements the {{ Name }}sApiClientInterface interface
 */
export class {{ Name }}sApiClientModel implements {{ Name }}sApiClientInterface {
  private readonly config!: {{ Name }}sApiClientConfigInterface
  constructor (config: {{ Name }}sApiClientConfigInterface) {
    this.config = config
  }

  getAll (): Promise<{{ Name }}Interface[]> {
    const getParameters: HttpRequestParamsInterface = {
      url: this.config.{{ name }}sUrl,
      requiresToken: false,
      payload: this.config.{{ name }}sRequest
    }
    return HttpClient.post<{{ Name }}Interface[]>(getParameters)
  }
}
