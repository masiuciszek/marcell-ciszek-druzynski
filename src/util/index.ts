export const randomNumber = (n = 10) => Math.floor(Math.random() * n)

export const sliceIt = (input: string, from = 0, to = 16): string =>
  input.length <= to ? input : input.slice(from, to) + "..."
