import { Node } from "@/types/types"

export const length = <T>(value: string | Array<T>): number => value.length
export const head = <T>(value: string | Array<T>): string | T => value[0]
export const tail = <T>(value: string | Array<T>): Array<T> | string => value.slice(1)
export const push = <T>(list: Array<T>, value: T) => [...list, value]
export const pop = <T>(list: Array<T>) => [...list].slice(0, -1)
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

export const getNodes = (edges: Array<Node>) => edges.map((x) => x.node)
