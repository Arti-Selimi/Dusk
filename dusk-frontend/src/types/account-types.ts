import { BankAccount } from "@/generated/graphql"

export type AccountFieldKey = keyof Pick<
  BankAccount,
  | "name"
  | "accountNumber"
  | "currency"
  | "status"
  | "type"
  | "balance"
>

export type EditableAccountFieldKey =
  | "name"
  | "currency"
  | "type"
  | "balance"

export type AccountFieldConfig = {
  label: string
  icon?: React.ReactNode
  type?: "text" | "number" | "switch"
}
