import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"

export default function IndexPage() {

  const drinks = useAppStore((state) => state.drinks)

  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks])
  return (
    <>
      <h1 className="text-6xl font-extrabold">Inicio</h1>
      {hasDrinks ? (
        <>
          <p>Si hay bebidas</p>
        </>
      ) : (
        <p className="my-10 text-center text-2xl">No hay resultado aún, utiliza el formulario para buscar recetas</p>
      )}
    </>
  )
}
