import { TransformToMoneyPattern } from "../../utils/transformToMoneyPattern";

export function moneyMask(e) {
  let value = e.currentTarget.value;
  e.currentTarget.value = TransformToMoneyPattern(value);
  return e;
}