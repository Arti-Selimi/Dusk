"use client";
import { ArrowAnimation } from "@/components/ArrowAnimation/ArrowAnimation";
import { RowLayout } from "@/components/RowLayout/RowLayout";
import Link from "next/link";
import { ExtraForm } from "@/components/ExtraForm/ExtraForm";
import {
  BankAccountInput,
  useCreateBankAccountMutation,
} from "@/generated/graphql";

const initialValues = {
  name: "",
  type: "",
  cardId: "",
  currency: "",
};
const CreateAccount = () => {
  const [bankAccount, { loading }] = useCreateBankAccountMutation();
  const onSubmit = async (values: BankAccountInput) => {
    await bankAccount({
      variables: {
        accountDetails: {
          name: values.name,
          ...(values.cardId && { cardId: values.cardId }),
          ownerId: values.ownerId,
          type: values.type,
          currency: values.currency,
        },
      },
    });
  };
  return (
    <RowLayout active="Account">
      <div className="form">
        <div className="form_header">
          <ArrowAnimation content="Create your bank account now! We’re excited to have you on board" />
        </div>
        <ExtraForm onSubmit={onSubmit} initialValues={initialValues} />
      </div>
    </RowLayout>
  );
};

export default CreateAccount;
