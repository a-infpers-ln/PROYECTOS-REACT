import { categories } from "../data/categories";

export default function ExpenseForm() {
  return (
    <form className="space-y-5">
        <legend
            className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2"
        >
            Nuevo Gasto
        </legend>

        <div className="flex flex-col gap-2">
            <label
                htmlFor="expenseName"
                className="text-xl"
            >
                Nombre Gasto:
            </label>
            <input 
                type="text"
                id="expenseName"
                placeholder="Añade el nombre del gasto"
                className="bg-slate-100 p-2"
                name="expenseName"
            />
        </div>

        <div className="flex flex-col gap-2">
            <label
                htmlFor="amount"
                className="text-xl"
            >
                Nombre Gasto:
            </label>
            <input 
                type="number"
                id="amount"
                placeholder="Añade la cantidad del gasto: ej. 300"
                className="bg-slate-100 p-2"
                name="amount"
            />
        </div>

        <div className="flex flex-col gap-2">
            <label
                htmlFor="category"
                className="text-xl"
            >
                Categoría:
            </label>
            <select 
                id="category"
                className="bg-slate-100 p-2"
                name="category"
            >

                <option value="">-- Seleccione --</option>
                {categories.map(category => (
                    <option
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))}

            </select>

            <input 
                type="submit"
                className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                value={'Registrar Gastos'}
            />
        </div>


    </form>
  )
}
