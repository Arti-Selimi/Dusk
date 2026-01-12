import { Edit, Check, X } from "lucide-react"
import styles from "./editable-field.module.css"
import { useState } from "react"

export const EditableField = ({
  label,
  value,
  isEditing,
  onEdit,
  onCancel,
  onSave,
  icon,
  type
}: {
  label: string
  value: string
  icon?: React.ReactNode
  isEditing: boolean
  onEdit: () => void
  onCancel: () => void
  onSave: (value: string) => void
  type?: string
}) => {
  const [draft, setDraft] = useState(value)

  return (
    <div className={styles.field}>
      <span className={styles.label}>
        {icon}
        {label}
      </span>

      {isEditing ? (
        <div className={styles.editRow}>
          <input
            autoFocus
            value={draft}
            type={type ?? "text"}
            onChange={(e) => setDraft(e.target.value)}
          />
          <Check onClick={() => onSave(draft)} />
          <X onClick={onCancel} />
        </div>
      ) : (
        <div className={styles.valueRow}>
          <span>{value}</span>
          <Edit onClick={onEdit} />
        </div>
      )}
    </div>
  )
}
