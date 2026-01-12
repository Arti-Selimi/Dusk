
import { User } from "@/generated/graphql"
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { useState } from "react"
import { EditableField } from "./EditableField"
import { EditableFieldKey } from "@/types/types"
import styles from "./user-details-tab.module.css"
import { useUpdateUserMutation } from "@/generated/graphql"

export const UserDetailsTab = ({ user }: { user: User }) => {
  const [editing, setEditing] = useState<EditableFieldKey | null>(null)
  const [updateUser] = useUpdateUserMutation()

  const saveField = (key: EditableFieldKey, value: string) => {
    updateUser({
      variables: {
        userDetails: {
          id: user.id,
          [key]: key === "birthDate"
            ? new Date(value).toISOString()
            : value,
        },
      },
    })

    setEditing(null)
  }

  return (
    <div className={styles.container}>
      <h2>Personal Information</h2>

      <div className={styles.grid}>
        <EditableField
          label="First Name"
          value={user.firstName}
          isEditing={editing === "firstName"}
          onEdit={() => setEditing("firstName")}
          onCancel={() => setEditing(null)}
          onSave={(v) => saveField("firstName", v)}
        />

        <EditableField
          label="Last Name"
          value={user.lastName}
          isEditing={editing === "lastName"}
          onEdit={() => setEditing("lastName")}
          onCancel={() => setEditing(null)}
          onSave={(v) => saveField("lastName", v)}
        />

        <EditableField
          label="Birth Date"
          value={user.birthDate
            ? new Date(user.birthDate).toLocaleDateString()
            : "-"}
          icon={<Calendar size={14} />}
          isEditing={editing === "birthDate"}
          onEdit={() => setEditing("birthDate")}
          onCancel={() => setEditing(null)}
          onSave={(v) => saveField("birthDate", v)}
          type="date"
        />
      </div>

      <h2>Contact</h2>

      <div className={styles.grid}>
        <EditableField
          label="Email"
          value={user.email}
          icon={<Mail size={14} />}
          isEditing={editing === "email"}
          onEdit={() => setEditing("email")}
          onCancel={() => setEditing(null)}
          onSave={(v) => saveField("email", v)}
          type="email"
        />

        <EditableField
          label="Phone Number"
          value={user.phoneNumber || "-"}
          icon={<Phone size={14} />}
          isEditing={editing === "phoneNumber"}
          onEdit={() => setEditing("phoneNumber")}
          onCancel={() => setEditing(null)}
          onSave={(v) => saveField("phoneNumber", v)}
        />

        <EditableField
          label="Address"
          value={user.address || "-"}
          icon={<MapPin size={14} />}
          isEditing={editing === "address"}
          onEdit={() => setEditing("address")}
          onCancel={() => setEditing(null)}
          onSave={(v) => saveField("address", v)}
        />

        <EditableField
          label="Billing Address"
          value={user.billingAddress || "-"}
          icon={<MapPin size={14} />}
          isEditing={editing === "billingAddress"}
          onEdit={() => setEditing("billingAddress")}
          onCancel={() => setEditing(null)}
          onSave={(v) => saveField("billingAddress", v)}
        />
      </div>
    </div>
  )
}

