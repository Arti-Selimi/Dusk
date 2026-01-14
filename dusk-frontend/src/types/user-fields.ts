import { User } from "@/generated/graphql"

export type UserFieldKey = keyof Pick<
  User,
  | "firstName"
  | "lastName"
  | "birthDate"
  | "email"
  | "phoneNumber"
  | "address"
  | "billingAddress"
>

export type UserFieldConfig = {
  label: string
  icon?: React.ReactNode
  type?: "text" | "email" | "date"
  section: "personal" | "contact"
}
