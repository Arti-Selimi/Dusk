'use client'

import { Spinner } from "@/components/Spinner/Spinner"
import { useToast } from "@/components/ToastProvider/ToastProvider"
import { useRegisterMutation } from "@/generated/graphql"
import { useAuth } from "@/lib/zustand/provider"
import { registerValues } from "@/types/types"
import { Field, Form, Formik } from "formik"
import { useRouter } from "next/navigation"

const Register = (): React.ReactElement => {
  const { addToast } = useToast()
  const [register, { loading }] = useRegisterMutation()
  const router = useRouter()

  const onSubmit = async (values: registerValues): Promise<void> => {
    await register({
      variables: {
        registerRequest: {
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
          address: values.address,
          billingAddress: values.address,
          phoneNumber: values.phoneNumber
        }
      },
      onCompleted: (response) => {
        if (!response.register) return

        const token = response.register.token
        localStorage.setItem("token", token)
        useAuth.getState().login(token)
        addToast({ type: "success", message: "User successfully registered!" })
        router.push("/")
      },
      onError: (error) => {
        addToast({ type: "error", message: error.message })
      }
    })
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        billingAddress: '',
        phoneNumber: ''
      }}
      onSubmit={async (values) => onSubmit(values)}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="email" type="email" placeholder="Email" />
          <Field name="password" type="password" placeholder="Password" />
          <Field name="firstName" type="text" placeholder="firstName" />
          <Field name="lastName" type="text" placeholder="lastName" />
          <Field name="address" type="text" placeholder="address" />
          <Field name="billingAddress" type="text" placeholder="billingAddress" />
          <Field name="phoneNumber" type="text" placeholder="phoneNumber" />
          <button type="submit" disabled={isSubmitting}>{loading ? (<Spinner size={20} />) : "Log in"}</button>
        </Form>
      )
      }
    </Formik >
  )
}

export default Register;
