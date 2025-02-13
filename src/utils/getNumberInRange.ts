type GetNumberInRangeArgs = {
  val: number
  max: number
  min: number
}

export function getNumberInRange({ val, max, min }: GetNumberInRangeArgs): number {
  if (max < min) {
    return val
  }
  return Math.min(Math.max(val, isNaN(min) ? val : min), isNaN(max) ? val : max)
}
