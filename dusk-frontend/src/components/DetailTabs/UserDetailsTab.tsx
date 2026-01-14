import { User } from "@/generated/graphql"
import { useState } from "react"
import { EditableField } from "./EditableField"
import { userFields } from "@/consts/user"
import { UserFieldKey } from "@/types/user-fields"
import styles from "./user-details-tab.module.css"
import { useUpdateUserMutation } from "@/generated/graphql"

export const UserDetailsTab = ({ user }: { user: User }) => {
  const [editing, setEditing] = useState<UserFieldKey | null>(null)
  const [updateUser] = useUpdateUserMutation()

  const saveField = (key: UserFieldKey, value: string) => {
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

  const renderSection = (section: "personal" | "contact") =>
    (Object.keys(userFields) as UserFieldKey[])
      .filter((key) => userFields[key].section === section)
      .map((key) => {
        const field = userFields[key]
        const rawValue = user[key]

        const displayValue =
          key === "birthDate" && rawValue
            ? new Date(rawValue).toLocaleDateString()
            : rawValue ?? "-"

        return (
          <EditableField
            key={key}
            label={field.label}
            value={displayValue}
            icon={field.icon}
            type={field.type}
            isEditing={editing === key}
            onEdit={() => setEditing(key)}
            onCancel={() => setEditing(null)}
            onSave={(v) => saveField(key, String(v))}
          />
        )
      })

  return (
    <div className={styles.container}>
      <h2>Personal Information</h2>
      <div className={styles.grid}>{renderSection("personal")}</div>

      <h2>Contact</h2>
      <div className={styles.grid}>{renderSection("contact")}</div>
    </div>
  )
}

