import { Units } from "../types"

export const unitConvert = (value: number, unit: Units): number => {
  if (!value || !unit) return 0

  if (unit === Units.lovelace) {
    return value * 1000000
  } else {
    return value / 1000000
  }
}
