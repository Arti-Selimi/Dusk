
"use client"

import styles from "./page.module.css"
import { User, CreditCard, Wallet, Settings } from "lucide-react"
import { useGetUserByIdQuery } from "@/generated/graphql"
import { Spinner } from "@/components/Spinner/Spinner"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/Navbar/Navbar"
import Image from "next/image"
import { useState } from "react"
import type { TabsArrayType, TabType } from "@/types/types"
import classNames from "classnames"
import { UserDetailsTab } from "@/components/DetailTabs/UserDetailsTab"

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
  }
]



const UserDetails = () => {
  const [currentTab, setCurrentTab] = useState<TabType>("User Details")
  const { id } = useParams<{ id: string }>()
  const { data, loading } = useGetUserByIdQuery({ variables: { id } })
  if (loading) return <Spinner size={30} />
  if (!data?.user) return <div>User not found</div>

  const user = data.user

  const tabComponent: Record<TabType, React.ReactNode> = {
    "User Details": <UserDetailsTab user={user} />,
    "Settings": <UserDetailsTab user={user} />,
    "Cards": <UserDetailsTab user={user} />,
    "Bank Accounts": <UserDetailsTab user={user} />,
    // "Settings": <SettingsTab />,
    // "Cards": <CardTab />,
    // "Bank Accounts": <BankAccountTab />
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
