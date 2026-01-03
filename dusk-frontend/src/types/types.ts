export interface loginValues {
  email: string
  password: string
}

export interface registerValues {
  email: string
  password: string
  firstName: string
  lastName: string
  address: string
  phoneNumber: string
  birthDate: string
}

export type SpinnerProps = {
  size?: number;
  color?: string;
};

export interface MainButtonProps {
  onClick?: <T>(input: T) => T | void
  type?: "main" | "contact" | "scrollTo" | "form"
  content: string
  width?: string
  padding?: string
  loading?: boolean
  htmlType: "submit" | "button"
  disabled?: boolean
}
