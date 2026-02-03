import {MembershipPlan} from "@/types/types";

export const membershipPlans: MembershipPlan[] = [
    {
        id: "1",
        tier: "BASIC",
        name: "Basic",
        price: 4,
        billingCycle: "monthly",
        features: ["3 Accounts", "3 Cards", "Unlimited transactions", "Email & chat support", "Basic analytics"],
        maxAccounts: 3,
        maxCards: 3,
    },
    {
        id: "2",
        tier: "PREMIUM",
        name: "Premium",
        price: 8,
        billingCycle: "monthly",
        features: ["10 Accounts", "10 Cards", "Priority transactions", "24/7 support", "Advanced analytics", "API access"],
        maxAccounts: 10,
        maxCards: 10,
        highlighted: true,
    },
]
