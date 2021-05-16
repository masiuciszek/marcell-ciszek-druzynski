export const randomNumber = (n = 10) => Math.floor(Math.random() * n)

export const sliceIt = (input: string, from = 0, to = 16): string =>
  input.length <= to ? input : input.slice(from, to) + "..."

export const positiveOrNegative = (): number => (Math.random() * 2) | 0 || -1
export const isDev = () => process.env.NODE_ENV === "development"
