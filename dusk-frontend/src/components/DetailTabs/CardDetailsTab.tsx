'use client'
import { Card, useUpdateCardMutation } from "@/generated/graphql";
import { EditableValue } from "@/types/types";
import { EditableField } from "./EditableField";
import { useState } from "react";
import { CardFieldKey, EditableCardFieldKey } from "@/types/card-types";
import { cardFields } from "@/consts/card";
import styles from "./user-details-tab.module.css"
export const CardDetailsTab = ({ card }: { card?: Card | null }) => {
  const [editing, setEditing] = useState<CardFieldKey | null>(null)
  const [updateCard] = useUpdateCardMutation()

  if (!card) {
    return (
      <div>No Card yet on this account</div>
    )
  }
  const saveField = (key: EditableCardFieldKey, value: EditableValue) => {
    const field = cardFields[key]

    updateCard({
      variables: {
        cardDetails: {
          cardId: card.id,
          ...field.toInput(value),
        },
      },
    })

    setEditing(null)
  }

  return (
    <div className={styles.container}>
      {(Object.keys(cardFields) as EditableCardFieldKey[]).map(key => {
        const field = cardFields[key]

        return (
          <EditableField
            key={key}
            label={field.label}
            icon={field.icon}
            type={field.type}
            value={field.getValue(card)}
            isEditing={editing === key}
            onEdit={() => setEditing(key)}
            onCancel={() => setEditing(null)}
            onSave={(v) => saveField(key, String(v))}
          />
        )
      })}

    </div>
  )
}
