
import { Settings } from "@/generated/graphql"
import { useState } from "react"
import { EditableField } from "./EditableField"
import { SettingsFieldKey } from "@/types/settings-types"
import styles from "./user-details-tab.module.css"
import { settingsFields } from "@/consts/settings"

export const SettingsTab = ({ settings }: { settings: Settings }) => {
  const [editing, setEditing] = useState<SettingsFieldKey | null>(null)
  // const [updateSettings] = useUpdateSettingsMutation()

  const saveField = (key: SettingsFieldKey, value: string | boolean) => {
    // updateSettings({
    //   variables: {
    //     userDetails: {
    //       id: settings.id,
    //       [key]: value,
    //     },
    //   },
    // })
    //
    setEditing(null)
  }

  return (
    <div className={styles.container}>
      <h2>Settings</h2>

      <div className={styles.grid}>
        {(Object.keys(settingsFields) as SettingsFieldKey[]).map((key) => {
          const field = settingsFields[key]
          return (
            <EditableField
              key={key}
              label={field.label}
              value={settings[key] ?? ""}
              icon={field.icon}
              type={field.type}
              isEditing={editing === key}
              onEdit={() => setEditing(key)}
              onCancel={() => setEditing(null)}
              onSave={(v) => saveField(key, String(v))}
            />
          )
        })}
      </div>
    </div>
  )
}

