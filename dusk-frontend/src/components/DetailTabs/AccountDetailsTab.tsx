'use client'
import { BankAccount, useUpdateBankAccountMutation } from "@/generated/graphql"
import { EditableValue } from "@/types/types"
import { EditableField } from "./EditableField"
import { useState } from "react"
import { EditableAccountFieldKey } from "@/types/account-types"
import { accountFields, readOnlyAccountFields } from "@/consts/account"
import styles from "./user-details-tab.module.css"
import { Plus } from "lucide-react"
import { AddFundsModal } from "../AddFundsModal/AddFundsModal"

export const AccountDetailsTab = ({ account }: { account?: BankAccount | null }) => {
  const [editing, setEditing] = useState<EditableAccountFieldKey | null>(null)
  const [showAddFundsModal, setShowAddFundsModal] = useState(false)
  const [updateBankAccount] = useUpdateBankAccountMutation()

  if (!account) {
    return (
      <div className={styles.container}>
        <p>No Bank Account yet on this account</p>
      </div>
    )
  }
  const saveField = (key: EditableAccountFieldKey, value: EditableValue) => {
    const field = accountFields[key]
    updateBankAccount({
      variables: {
        accountDetails: {
          accountId: account.id,
          ...(field.toInput && field.toInput(value)),
        },
      },
    })
    setEditing(null)
  }

  const handleEditAccount = (key: EditableAccountFieldKey) => {
    if (key === "balance") {

      return
    }
    setEditing(key)
  }

  const handleFundsAdded = () => {
    window.location.reload()
  }

  return (
    <div className={styles.container}>
      {showAddFundsModal && (
        <AddFundsModal
          accountId={account.id}
          onClose={() => setShowAddFundsModal(false)}
          onSuccess={handleFundsAdded}
        />
      )}

      <div className={styles.sectionHeader}>
        <h2>Account Information</h2>
        <button className={styles.addFundsBtn} onClick={() => setShowAddFundsModal(true)}>
          <Plus size={16} />
          Add Funds
        </button>
      </div>
      <div className={styles.grid}>
        {Object.entries(readOnlyAccountFields).map(([key, field]) => (
          <EditableField
            key={key}
            label={field.label}
            icon={field.icon}
            value={field.getValue(account)}
            isEditing={false}
            onEdit={() => { }}
            onCancel={() => { }}
            onSave={() => { }}
          />
        ))}
      </div>
      <h2>Editable Details</h2>
      <div className={styles.grid}>
        {(Object.keys(accountFields) as EditableAccountFieldKey[]).map(key => {
          const field = accountFields[key]
          return (
            <EditableField
              key={key}
              label={field.label}
              icon={field.icon}
              type={field.type}
              value={field.getValue(account)}
              isEditing={editing === key}
              onEdit={() => handleEditAccount(key)}
              onCancel={() => setEditing(null)}
              onSave={(v) => saveField(key, v)}
            />
          )
        })}
      </div>
    </div>
  )
}
