'use client'
import { Transaction, useTransactionsByAccountQuery, useTransactionsByUserQuery } from "@/generated/graphql"
import { useState } from "react"
import styles from "./user-details-tab.module.css"
import { ArrowDownCircle, ArrowUpCircle, Calendar, DollarSign, FileText, User, Wallet } from "lucide-react"
import classNames from "classnames"

type TransactionViewType = "user" | "account"

interface TransactionsTabProps {
  userId: string
  accountId?: string
}

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const isDebit = transaction.transactionType === "DEBIT" || transaction.transactionType === "WITHDRAWAL"
  const formattedDate = new Date(transaction.createdAt).toLocaleDateString()
  const formattedAmount = `${isDebit ? "-" : "+"}$${Math.abs(transaction.amount).toFixed(2)}`

  return (
    <div className={styles.transactionItem}>
      <div className={styles.transactionIcon}>
        {isDebit ? (
          <ArrowUpCircle size={24} color="var(--error, #ef4444)" />
        ) : (
          <ArrowDownCircle size={24} color="var(--success, #22c55e)" />
        )}
      </div>
      <div className={styles.transactionDetails}>
        <div className={styles.transactionHeader}>
          <span className={styles.transactionType}>{transaction.transactionType}</span>
          <span className={classNames(styles.transactionAmount, isDebit ? styles.debit : styles.credit)}>
            {formattedAmount}
          </span>
        </div>
        <div className={styles.transactionMeta}>
          <span className={styles.transactionDate}>
            <Calendar size={14} />
            {formattedDate}
          </span>
          {transaction.description && (
            <span className={styles.transactionDescription}>
              <FileText size={14} />
              {transaction.description}
            </span>
          )}
        </div>
        <div className={styles.transactionBalance}>
          <span>Balance: ${transaction.balanceBefore.toFixed(2)} → ${transaction.balanceAfter.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export const TransactionsTab = ({ userId, accountId }: TransactionsTabProps) => {
  const [viewType, setViewType] = useState<TransactionViewType>("user")

  const { data: userTransactions, loading: userLoading } = useTransactionsByUserQuery({
    variables: { userId },
    skip: viewType !== "user",
  })

  const { data: accountTransactions, loading: accountLoading } = useTransactionsByAccountQuery({
    variables: { accountId: accountId ?? "" },
    skip: viewType !== "account" || !accountId,
  })

  const isLoading = viewType === "user" ? userLoading : accountLoading
  const transactions = viewType === "user"
    ? userTransactions?.transactionsByUser
    : accountTransactions?.transactionsByAccount

  return (
    <div className={styles.container}>
      <div className={styles.tabHeader}>
        <h2>Transaction History</h2>
        <div className={styles.viewToggle}>
          <button
            className={classNames(styles.toggleButton, viewType === "user" && styles.activeToggle)}
            onClick={() => setViewType("user")}
          >
            <User size={16} />
            User Transactions
          </button>
          <button
            className={classNames(styles.toggleButton, viewType === "account" && styles.activeToggle)}
            onClick={() => setViewType("account")}
            disabled={!accountId}
          >
            <Wallet size={16} />
            Account Transactions
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className={styles.loadingState}>Loading transactions...</div>
      ) : !transactions || transactions.length === 0 ? (
        <div className={styles.emptyState}>
          <DollarSign size={48} />
          <p>No transactions found</p>
        </div>
      ) : (
        <div className={styles.transactionsList}>
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </div>
      )}
    </div>
  )
}
