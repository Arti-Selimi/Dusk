import { Field, Form, Formik } from "formik"
import { registerValues } from "@/types/types"
import styles from "@/app/Register/page.module.css"
import Link from "next/link"
import { MainButton } from "../MainButton/MainButton"
import classNames from "classnames"

interface Props {
  onSubmit: (values: registerValues) => Promise<void>
  loading: boolean
  type: "register" | "login" | "contact"
}

export const BasicForm = ({ onSubmit, loading, type }: Props) => {
  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          address: '',
          billingAddress: '',
          phoneNumber: '',
          birthDate: '',
          verifyPassword: ''
        }}
        onSubmit={async (values) => onSubmit(values)}
      >
        {({ isSubmitting, values }) => {
          console.log(values)
          console.log(values.password)
          console.log(values.verifyPassword)
          return (
            <Form className={styles.form}>
              <div className={styles.formNavi}>
                <Link className={classNames(type === "register" && styles.active)} href={type === "register" ? "#" : "/Register"}>Register</Link>
                <Link className={classNames(type === "login" && styles.active)} href={type === "login" ? "#" : "/Login"}>Login</Link>
              </div>
              {type === "register" && <div className={styles.name}>
                <Field required name="firstName" type="text" placeholder="First Name" />
                <Field required name="lastName" type="text" placeholder="Last Name" />
              </div>}
              <Field required name="email" type="email" placeholder="Email" />
              <div className={styles.name}>
                <Field required name="password" type="password" placeholder="Password" />
                {type === "register" && <Field name="verifyPassword" type="password" placeholder="Verify password" />}
              </div>
              {type === "register" && values.password !== values.verifyPassword && <p className="error">Password does not match</p>}
              {type === "register" && (
                <>
                  <Field required name="address" type="text" placeholder="Address" />
                  <Field required name="phoneNumber" type="text" placeholder="Phone Number" />
                  <Field required name="birthDate" type="date" />
                </>
              )}
              <MainButton disabled={isSubmitting || loading || values.password !== values.verifyPassword} htmlType="submit" type="form" content={type === "login" ? "Log in" : type === "register" ? "Register" : "Send"} loading={loading} />
            </Form>
          )
        }
        }
      </Formik >
    </div >
  )
}
