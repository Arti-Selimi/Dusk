import { Card, CardInput } from "@/generated/graphql"
import { EditableCardFieldKey } from "@/types/card-types"
import { EditableValue } from "@/types/types"

export const cardFields: Record<
  EditableCardFieldKey,
  {
    label: string
    type?: "text" | "switch"
    icon?: React.ReactNode
    getValue: (card: Card) => EditableValue
    toInput: (value: EditableValue) => Partial<CardInput>
  }
> = {
  brand: {
    label: "Brand",
    getValue: c => c.brand,
    toInput: v => ({ brand: v as string }),
  },

  isActive: {
    label: "Active",
    type: "switch",
    getValue: c => c.isActive,
    toInput: v => ({ isActive: Boolean(v) }),
  },

  account: {
    label: "Account",
    getValue: c => c?.account?.name ?? '',
    toInput: v => ({ accountId: v as string }),
  },
}


