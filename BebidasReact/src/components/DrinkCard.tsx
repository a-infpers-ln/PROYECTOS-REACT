import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {
  return (
    <div>
        <h2>{drink.strDrink}</h2>
    </div>
  )
}
