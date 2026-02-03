import { BankAccount, BankAccountInput, UpdateBalanceInput } from "@/generated/graphql"
import { EditableAccountFieldKey } from "@/types/account-types"
import { EditableValue } from "@/types/types"
import { CreditCard, DollarSign, Tag, Activity, Wallet } from "lucide-react"

export const accountFields: Record<
  EditableAccountFieldKey,
  {
    label: string
    type?: "text" | "number" | "switch"
    icon?: React.ReactNode
    getValue: (account: BankAccount) => EditableValue
    toInput: (value: EditableValue) => Partial<BankAccountInput | UpdateBalanceInput>
  }
> = {
  name: {
    label: "Account Name",
    icon: <Tag size={16} />,
    getValue: (a) => a.name,
    toInput: (v) => ({ name: v as string }),
  },
  currency: {
    label: "Currency",
    icon: <DollarSign size={16} />,
    getValue: (a) => a.currency,
    toInput: (v) => ({ currency: v as string }),
  },
  type: {
    label: "Account Type",
    icon: <Wallet size={16} />,
    getValue: (a) => a.type,
    toInput: (v) => ({ type: v as string }),
  },
  balance: {
    label: "Balance",
    icon: <DollarSign size={16} />,
    getValue: (a) => `${a.balance.toFixed(2)} ${a.currency}`,
    toInput: (v) => ({ balance: v as UpdateBalanceInput })
  },
}

export const readOnlyAccountFields: Record<
  "accountNumber" | "status",
  {
    label: string
    icon?: React.ReactNode
    getValue: (account: BankAccount) => EditableValue
  }
> = {
  accountNumber: {
    label: "Account Number",
    icon: <CreditCard size={16} />,
    getValue: (a) => a.accountNumber,
  },
  status: {
    label: "Status",
    icon: <Activity size={16} />,
    getValue: (a) => a.status,
  },

}
