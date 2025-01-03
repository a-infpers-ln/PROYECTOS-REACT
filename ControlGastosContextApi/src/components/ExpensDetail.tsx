import { formatDate } from "../helpers"
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"

type ExpenseDetailProps = {
    expense : Expense
}

export default function ExpensDetail({expense} : ExpenseDetailProps) {
  return (
    <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
        <div>

        </div>

        <div>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
        </div>

        <AmountDisplay 
            amount={expense.amount} 
        />
    </div>
  )
}
