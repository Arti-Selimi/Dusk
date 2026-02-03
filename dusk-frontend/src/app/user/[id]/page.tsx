
"use client"

import styles from "./page.module.css"
import { User, CreditCard, Wallet, Settings, ReceiptText } from "lucide-react"
import { Settings as SettingsType, useBankAccountQuery, useGetCardQuery, useGetUserByIdQuery, useSettingsQuery } from "@/generated/graphql"
import { Spinner } from "@/components/Spinner/Spinner"
import { useParams, useSearchParams } from "next/navigation"
import { Navbar } from "@/components/Navbar/Navbar"
import Image from "next/image"
import { useState } from "react"
import type { TabsArrayType, TabType } from "@/types/types"
import classNames from "classnames"
import { UserDetailsTab } from "@/components/DetailTabs/UserDetailsTab"
import { SettingsTab } from "@/components/DetailTabs/SettingsTab"
import { CardDetailsTab } from "@/components/DetailTabs/CardDetailsTab"
import { AccountDetailsTab } from "@/components/DetailTabs/AccountDetailsTab"
import { TransactionsTab } from "@/components/DetailTabs/TransactionsTab"

const tabs: TabsArrayType = [
  {
    icon: <User />,
    name: "User Details"
  },
  {
    icon: <Settings />,
    name: "Settings"
  },
  {
    icon: <CreditCard />,
    name: "Cards"
  },
  {
    icon: <Wallet />,
    name: "Bank Accounts"
  },
  {
    icon: <ReceiptText />,
    name: "Transactions"
  }
]



const UserDetails = () => {
  const { id } = useParams<{ id: string }>()
  const searchParams = useSearchParams()
  const selection = searchParams.get("selection") as TabType | null
  const [currentTab, setCurrentTab] = useState<TabType>(selection ? selection : "User Details")
  const { data, loading } = useGetUserByIdQuery({ variables: { id } })
  const { data: settingsData } = useSettingsQuery({ variables: { id } })
  const { data: cardData } = useGetCardQuery({ variables: { ownerId: id } })
  const { data: accountData } = useBankAccountQuery({ variables: { ownerId: id } })
  if (loading) return <Spinner size={30} />
  if (!data?.user || !settingsData?.settings) return <div>User not found</div>

  const user = data.user

  const tabComponent: Record<TabType, React.ReactNode> = {
    "User Details": <UserDetailsTab user={user} />,
    "Settings": <SettingsTab settings={settingsData.settings as SettingsType} />,
    "Cards": <CardDetailsTab card={cardData?.card} />,
    "Bank Accounts": <AccountDetailsTab account={accountData?.bankAccount} />,
    "Transactions": <TransactionsTab userId={user.id} accountId={accountData?.bankAccount?.id} />
  }

  return (
    <div className="container">
      <Navbar active="" row={false} />
      <div className={styles.header}>
        <div className={styles.textBox}>
          <h1>Hey {user.firstName}! <br />This is your personal details page</h1>
          <p>Come here to find or update your account, card and user data</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/shared/DetailsPlaceholder.svg"}
            alt="placeholder"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.menu} role="menu">
          {tabs.map(tab => (
            <div
              className={classNames(styles.menuItem, tab.name === currentTab && styles.activeMenu)}
              key={tab.name}
              onClick={() => setCurrentTab(tab.name)}
            >
              {tab.icon}<p>{tab.name}</p>
            </div>
          ))}
        </div>
        {tabComponent[currentTab ?? '']}
      </div>
    </div>
  )
}

export default UserDetails;
