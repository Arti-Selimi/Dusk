import { Edit, Check, X } from "lucide-react"
import styles from "./editable-field.module.css"
import { useState } from "react"
import { EditableFieldType, EditableValue } from "@/types/types"


export const EditableField = ({
  label,
  value,
  icon,
  isEditing,
  onEdit,
  onCancel,
  onSave,
  type = "text",
}: {
  label: string
  value: EditableValue
  icon?: React.ReactNode
  isEditing: boolean
  onEdit: () => void
  onCancel: () => void
  onSave: (value: EditableValue) => void
  type?: EditableFieldType
}) => {
  const [draft, setDraft] = useState<EditableValue>(value)

  const startEdit = () => {
    setDraft(value)
    onEdit()
  }

  const cancelEdit = () => {
    setDraft(value)
    onCancel()
  }

  return (
    <div className={styles.field}>
      <span className={styles.label}>
        {icon}
        {label}
      </span>

      {isEditing ? (
        <div className={styles.editRow}>
          {type === "switch" ? (
            <>
              <input
                type="checkbox"
                checked={Boolean(draft)}
                onChange={(e) => setDraft(e.target.checked)}
              />
              <Check onClick={() => onSave(draft)} />
              <X onClick={cancelEdit} />
            </>
          ) : (
            <>
              <input
                autoFocus
                type={type}
                value={draft as string | number}
                onChange={(e) =>
                  setDraft(type === "number" ? Number(e.target.value) : e.target.value)
                }
              />
              <Check onClick={() => onSave(draft)} />
              <X onClick={cancelEdit} />
            </>
          )}
        </div>
      ) : (
        <div className={styles.valueRow}>
          <span>
            {typeof value === "boolean"
              ? value
                ? "Enabled"
                : "Disabled"
              : value}
          </span>
          <Edit onClick={startEdit} />
        </div>
      )}
    </div>
  )
}

