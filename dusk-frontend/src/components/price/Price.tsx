import {PriceProps} from "@/types/types"

export const Price = ({title, value}: PriceProps) => {
  return (
    <div className="price">
      <p>{title}</p>
      <h1>${value}</h1>
    </div>
  )
}
