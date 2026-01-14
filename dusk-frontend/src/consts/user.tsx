import { Calendar, Mail, Phone, MapPin } from "lucide-react"
import { UserFieldConfig, UserFieldKey } from "@/types/user-fields"

export const userFields: Record<UserFieldKey, UserFieldConfig> = {
  firstName: {
    label: "First Name",
    section: "personal",
  },
  lastName: {
    label: "Last Name",
    section: "personal",
  },
  birthDate: {
    label: "Birth Date",
    icon: <Calendar size={14} />,
    type: "date",
    section: "personal",
  },
  email: {
    label: "Email",
    icon: <Mail size={14} />,
    type: "email",
    section: "contact",
  },
  phoneNumber: {
    label: "Phone Number",
    icon: <Phone size={14} />,
    section: "contact",
  },
  address: {
    label: "Address",
    icon: <MapPin size={14} />,
    section: "contact",
  },
  billingAddress: {
    label: "Billing Address",
    icon: <MapPin size={14} />,
    section: "contact",
  },
}
