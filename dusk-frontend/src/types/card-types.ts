import { Card } from "@/generated/graphql";

export type CardFieldKey = keyof Pick<
  Card,
  | "brand"
  | "account"
  | "cardNumber"
  | "expiryDate"
  | "isActive">

export type CardFieldConfig = {
  label: string
  type?: "text" | "switch" | "Date" | "select" | "password"
}

export type EditableCardFieldKey =
  | "brand"
  | "account"
  | "isActive"
