'use client'

import { BasicForm } from "@/components/RegisterForm/RegisterForm"
import { useToast } from "@/components/ToastProvider/ToastProvider"
import { useRegisterMutation } from "@/generated/graphql"
import { useAuth } from "@/lib/zustand/provider"
import { registerValues } from "@/types/types"
import { useRouter } from "next/navigation"
import styles from "./page.module.css"
import { FormDisplay } from "@/components/FormDisplay/FromDisplay"

const Register = (): React.ReactElement => {
  const { addToast } = useToast()
  const [register, { loading }] = useRegisterMutation()
  const router = useRouter()

  const onSubmit = async (values: registerValues): Promise<void> => {
    console.log(values)
    await register({
      variables: {
        registerRequest: {
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
          address: values.address,
          billingAddress: values.address,
          phoneNumber: values.phoneNumber,
          birthDate: `${values.birthDate}T00:00:00`
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
    <div className={styles.registerContainer}>
      <FormDisplay />
      <BasicForm onSubmit={onSubmit} loading={loading} type="register" />
    </div>
  )
}

export default Register;
