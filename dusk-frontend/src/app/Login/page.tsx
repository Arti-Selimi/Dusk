'use client'

import { useLoginMutation } from "@/generated/graphql"
import { Field, Form, Formik } from "formik"
import { loginValues } from "../../types/types"
import { Spinner } from "@/components/Spinner/Spinner"
import { useToast } from "@/components/ToastProvider/ToastProvider"
import { useAuth } from "@/lib/zustand/provider"
import { useRouter } from "next/navigation"

const Login = (): React.ReactElement => {
  const [login, { loading }] = useLoginMutation()
  const { addToast } = useToast()
  const router = useRouter()

  if (useAuth.getState().isLoggedIn) router.push("/")
  const onSubmit = async (values: loginValues): Promise<void> => {
    await login({
      variables: {
        loginRequest: {
          email: values.email,
          password: values.password
        }
      },
      onCompleted: (response) => {
        if (!response.login) return

        const token = response.login.token
        localStorage.setItem("token", token)
        useAuth.getState().login(token)
        addToast({ type: "success", message: "login successfull" })
        router.push("/")
      },
      onError: (error) => {
        addToast({ type: "error", message: error.message })
      }
    })
  }

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values) => onSubmit(values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="email" type="email" placeholder="Email" />
            <Field name="password" type="password" placeholder="Password" />
            <button type="submit" disabled={isSubmitting}>{loading ? (<Spinner size={20} />) : "Log in"}</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login;
