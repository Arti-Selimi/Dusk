"use client";

import { useLoginMutation } from "@/generated/graphql";
import { loginValues } from "../../types/types";
import { useToast } from "@/components/ToastProvider/ToastProvider";
import { useAuth } from "@/lib/zustand/provider";
import { useRouter } from "next/navigation";
import { FormDisplay } from "@/components/FormDisplay/FormDisplay";
import { BasicForm } from "@/components/RegisterForm/RegisterForm";
import styles from "../Register/page.module.css";
import { useEffect } from "react";

const Login = (): React.ReactElement => {
  const [login, { loading }] = useLoginMutation();
  const { addToast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (useAuth.getState().isLoggedIn && localStorage.getItem("token") !== "")
      router.push("/");
  }, []);
  const onSubmit = async (values: loginValues): Promise<void> => {
    await login({
      variables: {
        loginRequest: {
          email: values.email,
          password: values.password,
        },
      },
      onCompleted: (response) => {
        if (!response.login) return;

        const token = response.login.token;
        localStorage.setItem("token", token);
        useAuth.getState().login(token);
        addToast({ type: "success", message: "login successfull" });
        router.push("/");
      },
      onError: (error) => {
        addToast({ type: "error", message: error.message });
      },
    });
  };

  return (
    <div className={styles.registerContainer}>
      <FormDisplay />
      <BasicForm onSubmit={onSubmit} loading={loading} type="login" />
    </div>
  );
};

export default Login;
