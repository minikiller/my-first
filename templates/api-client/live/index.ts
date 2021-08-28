
import { config } from '@/config'
import { {{ Name }}ApiClientConfigInterface, {{ Name }}ApiClientInterface, {{ Name }}ApiClientModel } from '@/module/quote/models/api-client'

const quoteConfig: {{ Name }}ApiClientConfigInterface = config.{{ name }}.{{ name }}Config
// instantiate the {{ Name }}ApiClient pointing at the url that returns static json mock data
const {{ name }}ApiClient: {{ Name }}ApiClientInterface = new {{ Name }}ApiClientModel(quoteConfig) // export our instance

export default {{ name }}ApiClient
