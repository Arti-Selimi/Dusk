"use client"
import { ArrowAnimation } from "@/components/ArrowAnimation/ArrowAnimation"
import { RowLayout } from "@/components/RowLayout/RowLayout";
import Link from "next/link";
import { ExtraForm } from "@/components/ExtraForm/ExtraForm";
import { CardInput, useCreateCardMutation } from "@/generated/graphql";

const initialValues = {
  accountId: '',
  brand: '',
  address: '',
  billingAddress: '',
}
const CreateCard = () => {
  const [card, { loading }] = useCreateCardMutation()
  const onSubmit = async (values: CardInput) => {
    await card({
      variables: {
        cardDetails: {
          accountId: values.accountId,
          brand: values.brand,
          billingAddress: values.billingAddress,
          ownerAddress: values.ownerAddress
        }
      }
    })
  }
  return (
    <RowLayout active="Card">
      <div className="info">
        <div>
          <h1 className="accent">
            Create A Dusk Card
          </h1>
          <p>
            Create your Card <br /> with Dusk right now!
          </p>
        </div>
        <div>
          <div>
            <h3 className="accent">Phone</h3>
            <p>+389 49 123 123</p>
          </div>
          <div>
            <h3 className="accent">Email</h3>
            <p>info@dusk.com</p>
          </div>
          <div>
            <h3 className="accent">Office</h3>
            <p>230 Normal office, Random CQ (Country) county ({<Link className="accent" href={"https://google.maps"}>See on google maps</Link>})</p>
          </div>
        </div>
      </div>
      <div className="form">
      <div className="form_header">
             <ArrowAnimation content="Create your bank account now! We’re excited to have you on board" />
        </div>
                 <ExtraForm onSubmit={onSubmit} initialValues={initialValues} />
    </div>
      </RowLayout >
      )
}                                                                                                                        

           
   

export default CreateCard;
