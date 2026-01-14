import { Calendar, Mail, Phone, MapPin } from "lucide-react"
import { SettingsFieldConfig } from "../types/settings-types"

export const settingsFields: Record<string, SettingsFieldConfig> = {
  darkMode: {
    label: "Dark Mode",
    type: "switch",
  },
  language: {
    label: "Language",
  },
  timezone: {
    label: "Timezone",
    icon: <Calendar size={14} />,
  },
  emailNotifications: {
    label: "Email Notifications",
    icon: <Mail size={14} />,
    type: "switch",
  },
  pushNotifications: {
    label: "Push Notifications",
    icon: <Phone size={14} />,
    type: "switch",
  },
  reduceMotion: {
    label: "Reduce Motion",
    icon: <MapPin size={14} />,
    type: "switch",
  },
  analyticsEnabled: {
    label: "Analytics Enabled",
    type: "switch",
  },
} satisfies Record<string, SettingsFieldConfig>
