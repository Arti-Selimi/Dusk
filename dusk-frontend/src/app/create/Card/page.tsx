"use client";
import { ArrowAnimation } from "@/components/ArrowAnimation/ArrowAnimation";
import { RowLayout } from "@/components/RowLayout/RowLayout";
import { ExtraForm } from "@/components/ExtraForm/ExtraForm";
import { CardInput, useCreateCardMutation } from "@/generated/graphql";
import { useToast } from "@/components/ToastProvider/ToastProvider";
import { useRouter } from "next/navigation";

const initialValues = {
  accountId: "",
  brand: "",
  address: "",
  billingAddress: "",
};
const CreateCard = () => {
  const [card, { loading }] = useCreateCardMutation();
  const router = useRouter()
  const { addToast } = useToast()
  const onSubmit = async (values: CardInput) => {
    await card({
      variables: {
        cardDetails: {
          accountId: values.accountId,
          brand: values.brand,
          billingAddress: values.billingAddress,
          //ts-ignore Property 'address' does not exist on type 'CardInput'.
          ownerAddress: values.address,
          ownerId: values.ownerId,
        },
      },
      onCompleted(response) {
        addToast({ type: "success", message: "New Card created Successfully" });
        router.push(`/user/${values.ownerId}?selection=User Details`)
      }
    });
  };
  return (
    <RowLayout active="Card">
      <div className="form">
        <div className="form_header">
          <ArrowAnimation content="Create your bank account now! We’re excited to have you on board" />
        </div>
        <ExtraForm onSubmit={onSubmit} initialValues={initialValues} />
      </div>
    </RowLayout>
  );
};

export default CreateCard;
