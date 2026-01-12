import { Navbar } from "../Navbar/Navbar"

export const RowLayout = ({ children, active }: Readonly<{ children: React.ReactNode, active: string }>) => {
  return (
    <div className="RowLayout">
      <Navbar active={active} row={true} />
      {children}
    </div>
  )
}
