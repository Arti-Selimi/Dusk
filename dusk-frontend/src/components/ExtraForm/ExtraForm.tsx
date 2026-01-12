import { BankAccountInput, useMeQuery } from "@/generated/graphql"
import { Field, Form, Formik } from "formik"
import styles from "./extra-form.module.css"
import { MainButton } from "../MainButton/MainButton"

export const ExtraForm = ({ onSubmit, initialValues }: { onSubmit: (values: BankAccountInput) => Promise<void>, initialValues: Record<string, string> }) => {
  const { data, loading } = useMeQuery()

  if (loading) return <p>loadingg...</p>
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit({
        ...values,
        ownerId: data?.me?.id ?? ""
      })}
    >
      {({ values }) => {
        return (
          <Form className={styles.extraForm}>
            {Object.keys(values).map((key) => (
              key === "type" ? (
                <Field
                  key={key}
                  name={key}
                  as="select"
                  className={styles.input}
                >
                  <option value="" disabled>Type</option>
                  <option value="CREDIT">CREDIT</option>
                  <option value="SAVINGS">SAVINGS</option>
                  <option value="CHECKING">CHECKING</option>
                </Field>
              ) : key === "brand"
                ? (<Field
                  key={key}
                  name={key}
                  as="select"
                  className={styles.input}
                >
                  <option value="" disabled>Brand</option>
                  <option value="VISA">VISA</option>
                  <option value="MASTERCARD">MASTERCARD</option>
                  <option value="AMERICAN_EXPRESS">AMERICAN_EXPRESS</option>
                  <option value="DISCOVER">DISCOVER</option>
                  <option value="UNION_PAYG">UNION_PAY</option>
                  <option value="JCB">JCB</option>
                  <option value="RUPAY">RUPAY</option>
                </Field>) : (
                  <Field
                    key={key}
                    name={key}
                    placeholder={key.replace(/_/g, " ")
                      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
                      .replace(/^./, (char) => char.toUpperCase())}
                    type="text"
                    className={styles.input}
                  />
                )
            ))}

            <MainButton width="min-content" htmlType="submit" type="contact" content="Create" />
          </Form>
        )
      }}
    </Formik>
  )
}
