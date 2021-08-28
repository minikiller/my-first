import { IndiceInterface, StockTimeSalesInterface } from '@/models/indices/Indice.interface'
import { createLogger } from '@/plugins/vue-logger-plugin'

const logger = createLogger()
// 33,38,51,98,56,57,40
const configsMap: Map<string, string> = new Map<string, string>([
  ['33', 'stkNo'],
  ['36', 'sectorID'],
  ['37', 'name'],
  ['38', 'symbol'],
  ['39', 'compName'],
  ['40', 'sharePerLot'],
  ['41', 'shareIssued'],
  ['50', 'prevClose'],
  ['51', 'LACP'],
  ['119', 'textType'],
  ['123', 'parVal'],
  ['127', 'EPS'],
  ['134', 'currency'],
  ['138', 'PERatio'],
  ['151', 'marketCode'],
  ['152', 'settlePrice'],
  ['155', 'foreignLimit'],
  ['157', 'ISIN'],
  ['231', 'floorPrice'],
  ['232', 'ceilingPrice']
])

export const getData = (_data, config: Map<string, string> = configsMap): void => {
  _data.map((item) => {
    for (const key in item) {
      // logger.debug('current key is' + key)
      const newKey = config.get(key)
      if (newKey) {
        item[newKey] = item[key]
        delete item[key]
      } else {
        logger.debug('current key is ' + key)
        throw new Error('No key in map')
      }
      // const value = item[key]
      // logger.debug(newKey)
      // Use `key` and `value`
    }
  })
  return _data
}
