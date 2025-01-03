import AmountDisplay from "./AmountDisplay";
import { useBudget } from "../hooks/useBudget";
import { useMemo } from "react";

export default function BudgetTraket() {
    const {state} = useBudget()

    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    const remainingBudget = state.budget - totalExpenses

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center">
            <img src="/grafico.jpg" alt="Gráfica de gastos" />
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
            <button
                type="button"
                className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
            >
                Resetear App
            </button>
            <AmountDisplay 
                label="Presupuesto"
                amount={state.budget}
            />
            <AmountDisplay 
                label="Disponible"
                amount={remainingBudget}
            />
            <AmountDisplay 
                label="Gastado"
                amount={totalExpenses}
            />
        </div>
    </div>
  )
}
