export const OCM_DATA_SOURCE_URL = (url: string, key: string, since: string) =>
`${url}/poi/?output=json&modifiedsince=${since}&verbose=false&key=${key}`
