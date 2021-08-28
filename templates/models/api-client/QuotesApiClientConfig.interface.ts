/**
 * @Name {{ Name }}sApiClientConfigInterface
 * @description
 * Interface for the {{ Name }}s urls used to avoid hard-coded strings
 */
export interface {{ Name }}sApiClientConfigInterface {
  {{ name }}sUrl: string
  {{ name }}sRequest: {
    'ExchCode': string
    'MarketId': string
    'SortedByFID': string
    'Field': string
    'OrderBy': string
    'SectorID': string
    'HideWarrants': boolean
    'FilterByFeedStatus': string
    'PageNo': number
    'PageSize': number
  }
}
