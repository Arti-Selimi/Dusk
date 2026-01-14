import { Settings } from "@/generated/graphql"

export type SettingsFieldKey = keyof Pick<
  Settings,
  | "darkMode"
  | "language"
  | "timezone"
  | "emailNotifications"
  | "pushNotifications"
  | "reduceMotion"
  | "analyticsEnabled"
>

export type SettingsFieldConfig = {
  label: string
  icon?: React.ReactNode
  type?: "text" | "switch"
}
