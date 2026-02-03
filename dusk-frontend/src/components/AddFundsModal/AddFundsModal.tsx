'use client'
import { useState } from "react"
import { useUpdateBalanceMutation } from "@/generated/graphql"
import { CreditCard, Loader2, X } from "lucide-react"
import { useToast } from "../ToastProvider/ToastProvider"
import classNames from "classnames"
import styles from "./add-funds-modal.module.css"

const PRESET_AMOUNTS = [10, 25, 50, 100, 250, 500]

interface AddFundsModalProps {
  accountId: string
  onClose: () => void
  onSuccess: () => void
}

export const AddFundsModal = ({ accountId, onClose, onSuccess }: AddFundsModalProps) => {
  const [amount, setAmount] = useState<number>(0)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [updateBalance] = useUpdateBalanceMutation()
  const { addToast } = useToast()

  const handlePresetClick = (preset: number) => {
    setAmount(preset)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    const parsed = parseFloat(value)
    setAmount(isNaN(parsed) ? 0 : parsed)
  }

  const handleAddFunds = async () => {
    if (amount <= 0) {
      addToast({ type: "error", message: "Please enter a valid amount" })
      return
    }

    setIsLoading(true)
    try {
      await updateBalance({
        variables: {
          balanceInput: {
            accountId,
            amount,
            transactionType: "CREDIT",
            description: "Funds added via Visa •••• 4242"
          }
        }
      })
      addToast({ type: "success", message: `Successfully added $${amount.toFixed(2)} to your account!` })
      onSuccess()
      onClose()
    } catch (error) {
      console.error("Failed to add funds:", error)
      addToast({ type: "error", message: "Failed to add funds. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalCloseBtn} onClick={onClose}>
          <X size={20} />
        </button>

        <div className={styles.modalHeader}>
          <h2>Add Funds</h2>
          <p>Add money to your account using your linked card</p>
        </div>

        <div className={styles.modalBody}>
          {/* Dummy Visa Card */}
          <div className={styles.dummyCard}>
            <div className={styles.cardBrand}>
              <CreditCard size={24} />
              <span>VISA</span>
            </div>
            <div className={styles.cardNumber}>•••• •••• •••• 4242</div>
            <div className={styles.cardDetails}>
              <div>
                <span className={styles.cardLabel}>CARDHOLDER</span>
                <span>JOHN DOE</span>
              </div>
              <div>
                <span className={styles.cardLabel}>EXPIRES</span>
                <span>12/28</span>
              </div>
            </div>
          </div>

          {/* Amount Selection */}
          <div className={styles.amountSection}>
            <label>Select Amount</label>
            <div className={styles.presetAmounts}>
              {PRESET_AMOUNTS.map((preset) => (
                <button
                  key={preset}
                  className={classNames(styles.presetBtn, amount === preset && !customAmount && styles.selectedPreset)}
                  onClick={() => handlePresetClick(preset)}
                >
                  ${preset}
                </button>
              ))}
            </div>
            <div className={styles.customAmountWrapper}>
              <span className={styles.currencySymbol}>$</span>
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                className={styles.customAmountInput}
                min="0"
                step="0.01"
              />
            </div>
          </div>

          {amount > 0 && (
            <div className={styles.summaryRow}>
              <span>Amount to add:</span>
              <strong>${amount.toFixed(2)}</strong>
            </div>
          )}
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.cancelBtn} onClick={onClose} disabled={isLoading}>
            Cancel
          </button>
          <button
            className={styles.confirmBtn}
            onClick={handleAddFunds}
            disabled={amount <= 0 || isLoading}
          >
            {isLoading ? <Loader2 size={16} className={styles.spinner} /> : `Add $${amount.toFixed(2)}`}
          </button>
        </div>
      </div>
    </div>
  )
}
