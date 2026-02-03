import { Settings } from "@/generated/graphql"

export interface loginValues {
  email: string
  password: string
}

export interface registerValues {
  email: string
  password: string
  firstName: string
  lastName: string
  address: string
  billingAddress: string
  phoneNumber: string
  birthDate: string
}

export interface PriceProps {
  title: string
  value: string
}

export interface MessageBubbleProps {
  side: "left" | "right"
  content: string
}

export interface PackageProps {
  title: string
  price: string
}

export interface MainButtonProps {
  onClick?: () => void
  type: "contact" | "scrollTo" | "form" | "main"
  content: string
  width?: string
  padding?: string
  loading?: boolean
  disabled?: boolean
  fontSize?: string
  htmlType: "submit" | "button"
}

export interface SpinnerProps {
  size: number
  color?: string
}

export type TabType = "User Details" | "Settings" | "Cards" | "Bank Accounts" | "Transactions"

export type TabsArrayType = Array<{
  icon: React.ReactNode
  name: TabType
}>

export type EditableValue = string | number | boolean | Date | null | undefined

export type EditableFieldType = "text" | "number" | "switch" | "email" | "date"

export type MembershipTier = "BASIC" | "PREMIUM"

export interface MembershipPlan {
  id: string
  tier: MembershipTier
  name: string
  price: number
  billingCycle: "monthly" | "yearly"
  features: string[]
  maxAccounts: number
  maxCards: number
  highlighted?: boolean
}