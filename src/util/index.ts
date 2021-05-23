export const randomNumber = (n = 10) => Math.floor(Math.random() * n)

export const sliceIt = (input: string, from = 0, to = 16): string =>
  input.length <= to ? input : input.slice(from, to) + "..."

export const positiveOrNegative = (): number => (Math.random() * 2) | 0 || -1
export const isDev = () => process.env.NODE_ENV === "development"

const isObject = (obj: unknown) => obj !== null && typeof obj === "object"

export const re =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

export const setNestedObjectValues = (
  values: Record<string, any>,
  value: boolean,
  visited = new WeakMap(),
  response: Record<string, any> = {},
) => {
  for (const key of Object.keys(values)) {
    const val = values[key]
    if (isObject(val)) {
      if (!visited.get(val as Record<string, any>)) {
        visited.set(val as Record<string, any>, true)
        response[key] = Array.isArray(val) ? [] : {}
        setNestedObjectValues(val, value, visited, response)
      }
    } else {
      response[key] = value
    }
  }
  return response
}
