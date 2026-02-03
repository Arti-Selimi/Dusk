'use client'
import { useState } from "react"
import styles from "./page.module.css"
import { Navbar } from "@/components/Navbar/Navbar"
import {
  Membership,
  useGetMembershipByUserIdQuery,
  useCreateMembershipMutation,
  useUpdateMembershipMutation,
  useDeActivateMembershipMutation,
  useMeQuery,
  useBankAccountQuery,
  useUpdateBalanceMutation
} from "@/generated/graphql"
import {
  Crown,
  Star,
  Check,
  Calendar,
  CreditCard,
  Award,
  Loader2,
  X,
  AlertTriangle
} from "lucide-react"
import classNames from "classnames"
import {MembershipPlan, MembershipTier} from "@/types/types";
import {membershipPlans} from "@/consts/Memberships";
import { useToast } from "@/components/ToastProvider/ToastProvider"





const getTierIcon = (tier: MembershipTier) => {
  switch (tier) {
    case "BASIC": return <Star size={24} />
    case "PREMIUM": return <Crown size={24} />
  }
}

interface MembershipCardProps {
  plan: MembershipPlan
  currentTier?: string
  onSelect: (plan: MembershipPlan) => void
  isLoading?: boolean
}

const MembershipCard = ({ plan, currentTier, onSelect, isLoading }: MembershipCardProps) => {
  const isCurrentPlan = currentTier === plan.tier

  return (
    <div className={classNames(
      styles.planCard,
      plan.highlighted && styles.highlighted,
      isCurrentPlan && styles.currentPlan
    )}>
      {plan.highlighted && <span className={styles.popularBadge}>Most Popular</span>}
      {isCurrentPlan && <span className={styles.currentBadge}>Current Plan</span>}

      <div className={styles.planHeader}>
        <div className={styles.planIcon}>{getTierIcon(plan.tier)}</div>
        <h3 className={styles.planName}>{plan.name}</h3>
        <div className={styles.planPrice}>
          <span className={styles.currency}>$</span>
          <span className={styles.amount}>{plan.price}</span>
          <span className={styles.cycle}>/{plan.billingCycle === "monthly" ? "mo" : "yr"}</span>
        </div>
      </div>

      <ul className={styles.featuresList}>
        {plan.features.map((feature, idx) => (
          <li key={idx} className={styles.featureItem}>
            <Check size={16} color="var(--green)" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={classNames(styles.selectButton, isCurrentPlan && styles.disabled)}
        onClick={() => onSelect(plan)}
        disabled={isCurrentPlan || isLoading}
      >
        {isLoading ? (
          <Loader2 size={16} className={styles.spinner} />
        ) : isCurrentPlan ? (
          "Current Plan"
        ) : (
          "Subscribe"
        )}
      </button>
    </div>
  )
}

interface CurrentMembershipBannerProps {
  membership: Membership
  onCancel: () => void
  isCancelling: boolean
}

const CurrentMembershipBanner = ({ membership, onCancel, isCancelling }: CurrentMembershipBannerProps) => {
  const expiryDate = new Date(membership.expiryDate).toLocaleDateString()
  const startDate = new Date(membership.startDate).toLocaleDateString()

  return (
    <div className={styles.currentMembershipBanner}>
      <div className={styles.bannerContent}>
        <Award size={32} />
        <div className={styles.bannerInfo}>
          <h3>Your Current Plan: {membership.name}</h3>
          <p>
            <Calendar size={14} />
            Started {startDate} • {membership.isActive ? `Expires ${expiryDate}` : 'Inactive'}
          </p>
          <div className={styles.membershipStats}>
            <span><CreditCard size={14} /> Max Accounts: {membership.maxAccounts}</span>
            <span><CreditCard size={14} /> Max Cards: {membership.maxCards}</span>
            <span className={membership.isPaid ? styles.paid : styles.unpaid}>
              {membership.isPaid ? '✓ Paid' : '⚠ Unpaid'}
            </span>
          </div>
        </div>
      </div>
      {membership.isActive && (
        <button
          className={styles.cancelButton}
          onClick={onCancel}
          disabled={isCancelling}
        >
          {isCancelling ? <Loader2 size={16} className={styles.spinner} /> : 'Cancel Plan'}
        </button>
      )}
    </div>
  )
}

interface SubscriptionModalProps {
  plan: MembershipPlan
  balance: number
  onConfirm: () => void
  onCancel: () => void
  isLoading: boolean
  error?: string
}

const SubscriptionModal = ({ plan, balance, onConfirm, onCancel, isLoading, error }: SubscriptionModalProps) => {
  const hasInsufficientBalance = balance < plan.price

  return (
    <div className={styles.modalOverlay} onClick={onCancel}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onCancel}>
          <X size={20} />
        </button>

        <div className={styles.modalHeader}>
          <h2>Confirm Subscription</h2>
          <p>You are about to subscribe to the {plan.name} plan</p>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.modalPlanDetails}>
            <div className={styles.modalPlanRow}>
              <span>Plan</span>
              <strong>{plan.name}</strong>
            </div>
            <div className={styles.modalPlanRow}>
              <span>Price</span>
              <strong>${plan.price}/{plan.billingCycle === "monthly" ? "month" : "year"}</strong>
            </div>
            <div className={styles.modalPlanRow}>
              <span>Your Balance</span>
              <strong className={hasInsufficientBalance ? styles.insufficientBalance : ""}>
                ${balance.toFixed(2)}
              </strong>
            </div>
          </div>

          {hasInsufficientBalance && (
            <div className={styles.errorMessage}>
              <AlertTriangle size={18} />
              <span>Insufficient balance. You need ${(plan.price - balance).toFixed(2)} more to subscribe.</span>
            </div>
          )}

          {error && (
            <div className={styles.errorMessage}>
              <AlertTriangle size={18} />
              <span>{error}</span>
            </div>
          )}

          <div className={styles.modalInfo}>
            <p>By confirming, you agree to:</p>
            <ul>
              <li>${plan.price} will be deducted from your account</li>
              <li>Your subscription will start immediately</li>
              <li>You can cancel anytime from this page</li>
            </ul>
          </div>
        </div>

        <div className={styles.modalActions}>
          <button className={styles.modalCancelButton} onClick={onCancel} disabled={isLoading}>
            Cancel
          </button>
          <button
            className={styles.modalConfirmButton}
            onClick={onConfirm}
            disabled={hasInsufficientBalance || isLoading}
          >
            {isLoading ? <Loader2 size={16} className={styles.spinner} /> : "Confirm Subscription"}
          </button>
        </div>
      </div>
    </div>
  )
}

const Memberships = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [selectingPlan, setSelectingPlan] = useState<string | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null)
  const [subscriptionError, setSubscriptionError] = useState<string | undefined>()

  const { addToast } = useToast()

  const { data: meData, loading: meLoading } = useMeQuery()
  const userId = meData?.me?.id

  const { data: bankAccountData } = useBankAccountQuery({
    variables: { ownerId: userId ?? "" },
    skip: !userId,
  })

  const { data: membershipData, loading: membershipLoading, refetch } = useGetMembershipByUserIdQuery({
    variables: { userId: userId ?? "" },
    skip: !userId,
  })

  const [createMembership] = useCreateMembershipMutation()
  const [updateMembership] = useUpdateMembershipMutation()
  const [updateBalance] = useUpdateBalanceMutation()
  const [deactivateMembership, { loading: deactivating }] = useDeActivateMembershipMutation()

  const allMemberships = membershipData?.membershipByUser ?? []
  const currentMembership = allMemberships.find(m => m.isActive)
  const existingMembership = allMemberships[0] // Any membership (active or not)
  const currentTier = currentMembership?.membershipType as MembershipTier | undefined
  const accountBalance = bankAccountData?.bankAccount?.balance ?? 0
  const accountId = bankAccountData?.bankAccount?.id

  const handleSelectPlan = (plan: MembershipPlan) => {
    setSubscriptionError(undefined)
    setSelectedPlan(plan)
  }

  const handleCloseModal = () => {
    setSelectedPlan(null)
    setSubscriptionError(undefined)
  }

  const handleConfirmSubscription = async () => {
    if (!userId || !selectedPlan || !accountId) return

    if (accountBalance < selectedPlan.price) {
      setSubscriptionError("Insufficient balance in your account")
      addToast({ type: "error", message: "Insufficient balance to subscribe to this plan" })
      return
    }

    setSelectingPlan(selectedPlan.id)
    try {
      await updateBalance({
        variables: {
          balanceInput: {
            accountId,
            amount: selectedPlan.price,
            transactionType: "DEBIT",
            description: `Subscription to ${selectedPlan.name} membership`
          }
        }
      })

      if (existingMembership) {
        await updateMembership({
          variables: {
            membershipDetails: {
              id: existingMembership.id,
              userId,
              name: selectedPlan.name,
              type: selectedPlan.tier,
              isActive: true,
              isPaid: true,
            }
          }
        })
      } else {
        await createMembership({
          variables: {
            membershipDetails: {
              userId,
              name: selectedPlan.name,
              type: selectedPlan.tier,
            }
          }
        })
      }

      await refetch()
      setSelectedPlan(null)
      addToast({ type: "success", message: `Successfully subscribed to ${selectedPlan.name} plan!` })
    } catch (error) {
      console.error("Failed to create membership:", error)
      setSubscriptionError("Failed to process subscription. Please try again.")
      addToast({ type: "error", message: "Failed to process subscription" })
    } finally {
      setSelectingPlan(null)
    }
  }

  const handleCancelMembership = async () => {
    if (!currentMembership) return

    try {
      await deactivateMembership({
        variables: { id: currentMembership.id }
      })
      await refetch()
      addToast({ type: "success", message: "Membership cancelled successfully" })
    } catch (error) {
      console.error("Failed to cancel membership:", error)
      addToast({ type: "error", message: "Failed to cancel membership" })
    }
  }

  const isLoading = meLoading || membershipLoading

  const adjustedPlans = membershipPlans.map(plan => ({
    ...plan,
    price: billingCycle === "yearly" ? Math.round(plan.price * 10 * 100) / 100 : plan.price,
    billingCycle,
  }))

  const adjustedSelectedPlan = selectedPlan ? {
    ...selectedPlan,
    price: billingCycle === "yearly" ? Math.round(selectedPlan.price * 10 * 100) / 100 : selectedPlan.price,
    billingCycle,
  } : null

  return (
    <div className="container">
      <Navbar active="memberships" row={false} />

      {adjustedSelectedPlan && (
        <SubscriptionModal
          plan={adjustedSelectedPlan}
          balance={accountBalance}
          onConfirm={handleConfirmSubscription}
          onCancel={handleCloseModal}
          isLoading={selectingPlan === selectedPlan?.id}
          error={subscriptionError}
        />
      )}
      <div className={styles.pageContainer}>
        <div className={styles.header}>
          <h1>Membership Plans</h1>
          <p>Choose the plan that best fits your needs</p>

          <div className={styles.billingToggle}>
            <button
              className={classNames(styles.cycleButton, billingCycle === "monthly" && styles.active)}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={classNames(styles.cycleButton, billingCycle === "yearly" && styles.active)}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
              <span className={styles.saveBadge}>Save 20%</span>
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className={styles.loadingState}>
            <Loader2 size={32} className={styles.spinner} />
            <p>Loading membership information...</p>
          </div>
        ) : (
          <>
            {currentMembership && (
              <CurrentMembershipBanner
                membership={currentMembership}
                onCancel={handleCancelMembership}
                isCancelling={deactivating}
              />
            )}

            <div className={styles.plansGrid}>
              {adjustedPlans.map((plan) => (
                <MembershipCard
                  key={plan.id}
                  plan={plan}
                  currentTier={currentTier}
                  onSelect={handleSelectPlan}
                  isLoading={selectingPlan === plan.id}
                />
              ))}
            </div>

            {!userId && (
              <div className={styles.notLoggedIn}>
                <p>Please log in to manage your membership</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Memberships
