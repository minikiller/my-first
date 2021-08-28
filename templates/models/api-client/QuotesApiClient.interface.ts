import { {{ Name }}Interface } from '../{{ name }}.interface'
/**
 * @Name {{ Name }}sApiClientInterface
 * @description
 * Interface for the {{ Name }}s api client module
 */
export interface {{ Name }}sApiClientInterface {
  getAll (): Promise<{{ Name }}Interface[]>
}
